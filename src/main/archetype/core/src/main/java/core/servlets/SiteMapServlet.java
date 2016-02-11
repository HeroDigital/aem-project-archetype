package ${package}.core.servlets;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import javax.xml.stream.XMLOutputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamWriter;

import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.felix.scr.annotations.Activate;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.Externalizer;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageFilter;
import com.day.cq.wcm.api.PageManager;

/**
 * Servlet for sitemap.xml. Should be accessed from root page of site. Root page is considered the home page.
 * <p>
 * Should use inbound Apache rewrite rules or sling resolver rules so sitemap can be served from www.acme.com/sitemap.xml.
 *  
 * @author joelepps
 *
 */
@SlingServlet(
        label = "Site Map XML Servlet",
        metatype = false,
        resourceTypes = "cq:Page",
        selectors = "sitemapx",
        extensions = "xml",
        methods = { "GET" })
@Properties({
        @Property(name = "service.description", value = "Servlet for handling site map xml", propertyPrivate = true),
        @Property(name = "service.vendor", value = "Hero Digital", propertyPrivate = true)
})
public final class SiteMapServlet extends SlingSafeMethodsServlet {
    
    private static final long serialVersionUID = -3820887072686615052L;

    private static final Logger log = LoggerFactory.getLogger(SiteMapServlet.class);
    
    private static final String NS = "http://www.sitemaps.org/schemas/sitemap/0.9";
    
    private static final String NS_XSI = "http://www.w3.org/2001/XMLSchema-instance";
    
    private static final String CHANGEFREQ = "changefreq";

    private static final String PRIORITY = "priority";
    
    private static final String HIDE_IN_SITEMAP = "hideInSitemapXml";
    
    private static final String REDIRECT_TARGET = "redirectTarget";
    
    @Reference
    private Externalizer externalizer;
    
    private SimpleDateFormat sdf;
    
    @Activate
    protected void activate(Map<String, Object> properties) {
        this.sdf = new SimpleDateFormat("yyyy-MM-dd");
    }

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        response.setContentType(request.getResponseContentType());
        ResourceResolver resourceResolver = request.getResourceResolver();
        PageManager pageManager = resourceResolver.adaptTo(PageManager.class);
        
        Page page = pageManager.getContainingPage(request.getResource());
        String rootParm = request.getParameter("root");
        if (rootParm != null && rootParm.length() > 0) {
            Resource rootResource = resourceResolver.getResource(rootParm);
            if (rootResource != null) {
                page = pageManager.getContainingPage(rootResource);
            }
        }
        
        if (page == null) {
            log.error("No page found", new Exception("No page found"));
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        XMLOutputFactory outputFactory = XMLOutputFactory.newFactory();
        try {
            XMLStreamWriter stream = outputFactory.createXMLStreamWriter(response.getWriter());
            stream.writeStartDocument("1.0");

            stream.writeStartElement("", "urlset", NS);
            stream.writeNamespace("", NS);
            stream.writeNamespace("xsi", NS_XSI);
            stream.writeAttribute(NS_XSI, "schemaLocation", "http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd");

            String priority = page.getProperties().get(PRIORITY, String.class);
            write(page, stream, resourceResolver, priority); // write first page
            writeChildrenRecursive(resourceResolver, page, stream, null); // don't pass priority because root priority should not be inherited

            stream.writeEndElement();

            stream.writeEndDocument();
        } catch (XMLStreamException e) {
            throw new IOException(e);
        }
    }

    /**
     * Writes all children of the page (recursively) to the site map.
     * 
     * @param resourceResolver
     * @param page
     * @param stream
     * @param inheritedPriority
     * @throws XMLStreamException
     */
    private void writeChildrenRecursive(ResourceResolver resourceResolver, Page page, XMLStreamWriter stream, String inheritedPriority) throws XMLStreamException {
        for (Iterator<Page> children = page.listChildren(new SitemapXmlPageFilter(), true); children.hasNext();) {
            Page child = children.next();
            String priority = coalesce(child.getProperties().get(PRIORITY, String.class), inheritedPriority);
            
            write(child, stream, resourceResolver, priority);
        }
    }

    private void write(Page page, XMLStreamWriter stream, ResourceResolver resolver, String priority) throws XMLStreamException {
        ValueMap valueMap = page.getProperties();
        
        stream.writeStartElement(NS, "url");
        {
            stream.writeStartElement(NS, "loc");
    
            String loc = externalizer.publishLink(resolver, String.format("%s.html", page.getPath()));
            stream.writeCharacters(loc);
    
            stream.writeEndElement();
        }
        {
            Calendar modCal = valueMap.get("cq:lastModified", Calendar.class);
            if (modCal != null) {
                stream.writeStartElement(NS, "lastmod");
                stream.writeCharacters(sdf.format(modCal.getTime()));
                stream.writeEndElement();
            }
        }
        {
            if (!StringUtils.isBlank(priority)) {
                stream.writeStartElement(NS, "priority");
                stream.writeCharacters(priority);
                stream.writeEndElement();
            }
        }
        {
            String changefreq = valueMap.get(CHANGEFREQ, String.class);
            if (!StringUtils.isBlank(changefreq)) {
                stream.writeStartElement(NS, "changefreq");
                stream.writeCharacters(changefreq);
                stream.writeEndElement();
            }
        }
        stream.writeEndElement();
    }
    
    /**
     * Pick the first non-null and non-empty string.
     * 
     * @param strings
     * @return
     */
    private static String coalesce(String... strings) {
        if (strings == null || strings.length == 0) return null;
        for (String s : strings) {
            if (!StringUtils.isBlank(s)) return s;
        }
        return null;
    }
    
    /**
     * Adds filtering to base {@link PageFilter} by also checking for additional values.
     * 
     * @author joelepps
     *
     */
    private static class SitemapXmlPageFilter extends PageFilter {
        
        private boolean includeSitemapHidden;
        private boolean includeRedirectedPages;
        
        /**
         * <ul>
         * <li> Don't include invalid pages
         * <li> Include hidden pages (hideInNav)
         * <li> Don't include sitemap excluded pages (hideInSitemapXml)
         * <li> Don't include pages which redirect
         * </ul>
         */
        public SitemapXmlPageFilter() {
            this(false, true, false, false);
        }
        
        public SitemapXmlPageFilter(boolean includeInvalid, boolean includeHidden, boolean includeSitemapHidden, boolean includeRedirectedPages) {
            super(includeInvalid, includeHidden);
            this.includeSitemapHidden = includeSitemapHidden;
            this.includeRedirectedPages = includeRedirectedPages;
        }

        @Override
        public boolean includes(Page page) {
            // handles invalid and hideInNave checks
            boolean baseIncludes = super.includes(page); 
            if (!baseIncludes) return false;
            
            ValueMap valueMap = page.getProperties();
            
            boolean passesHideInSitemapXml = passesHideInSitemapXml(valueMap);
            boolean passesHideRedirectPages = passesHideRedirectPages(valueMap);
            
            return passesHideInSitemapXml && passesHideRedirectPages;
        }
        
        private boolean passesHideInSitemapXml(ValueMap valueMap) {
            boolean hideInSitemapXml = BooleanUtils.toBoolean(valueMap.get(HIDE_IN_SITEMAP, String.class));
            return (includeSitemapHidden || !hideInSitemapXml);
        }
        
        private boolean passesHideRedirectPages(ValueMap valueMap) {
            boolean hasRedirect = !StringUtils.isBlank(valueMap.get(REDIRECT_TARGET, String.class));
            return (includeRedirectedPages || !hasRedirect);
        }
        
    }
}
