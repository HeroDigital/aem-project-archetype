package ${package}.core.models.data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;

public class MetaTag {
    
    public static enum Channel { HTML }
    
    public static enum Tag {
        BASE_TITLE        ("baseTitle",     null, new Channel[0]),
        TITLE            ("title",         null, new Channel[0]),
        DESCRIPTION        ("description", "name", new Channel[]{Channel.HTML}),
        LOCALE            ("locale",         null,     new Channel[0]),
        CANONICAL_URL    ("url",         null,     new Channel[0]),
        PATH            ("path",         null,     new Channel[0]),
        CONTENT_TYPE    ("contentType", null,     new Channel[0]),
        TAGS            ("tags",         null,     new Channel[0]),
        PAGE_ID            ("pageID",         null,     new Channel[0]),
        ROBOTS_OPTIONS    ("robots",         "name", new Channel[]{Channel.HTML}),
        
        TWITTER_CARD    ("twitter:card", "name", new Channel[]{Channel.HTML}),
        TWITTER_SITE    ("twitter:site", "name", new Channel[]{Channel.HTML}),
        
        OG_TITLE        ("og:title",        "property", new Channel[]{Channel.HTML}),
        OG_DESCRIPTION    ("og:description",     "property", new Channel[]{Channel.HTML}),
        OG_IMAGE        ("og:image",        "property", new Channel[]{Channel.HTML}),
        OG_TYPE            ("og:type",            "property", new Channel[]{Channel.HTML}),
        OG_URL            ("og:url",             "property", new Channel[]{Channel.HTML});
        
        private final String name;
        private final Optional<String> nameAttr;
        private final List<Channel> channels;
        
        private Tag(String name, String nameAttr, Channel[] channels) {
            this.name = name;
            this.nameAttr = Optional.ofNullable(nameAttr);
            this.channels = Arrays.asList(channels);
        }
        
        public String getName() {
            return name;
        }

        public Optional<String> getNameAttr() {
            return nameAttr;
        }

        public List<Channel> getChannels() {
            return channels;
        }
    }
    
    public static final String SEP = ",";
    
    private final Tag tag;
    private final List<String> content;
    
    public MetaTag(Tag tag, String content) {
        this.tag = tag;
        this.content = new ArrayList<>();
        if (content != null) this.content.add(content);
    }
    
    public MetaTag(Tag tag, String... content) {
        this.tag = tag;
        if (content == null) {
            this.content = new ArrayList<>();
        } else {
            this.content = Arrays.asList(content);
        }
    }
    
    public MetaTag() {
        this.tag = null;
        this.content = new ArrayList<>(0);
    }
    
    public MetaTag.Tag getTag() {
        return tag;
    }
    
    public String getName() {
        if (tag == null) return null;
        return tag.getName();
    }
    
    /**
     * Get content. If multiple values, content is separated by {@link #SEP}
     * @return
     */
    public String getContent() {
        if (content.size() == 0) return null;
        return content.stream()
                .filter(x -> x != null)
                .collect(Collectors.joining(", "));
    }
    
    /**
     * Get the internal content collection.
     * @return
     */
    public List<String> getContentRaw() {
        return content;
    }
    
    /**
     * Map of attributes for insertion into {@code <meta>} HTML tag
     * @return
     */
    public Map<String, String> getMetaAttributeMap() {
        Map<String, String> attributes = new HashMap<>();
        String tagAttr = tag.getNameAttr()
                        .orElseThrow(() -> new IllegalStateException("Tag " + tag + " does not supply a HTML name attribute"));
        attributes.put(tagAttr, getName());
        attributes.put("content", getContent());
        return attributes;
    }
    
    public void addContent(String... content) {
        if (content == null || content.length == 0) {
            throw new IllegalArgumentException("Content cannot be null/empty");
        }
        for (String c : content) {
            if (!StringUtils.isBlank(c)) {
                this.content.add(c);
            }
        }
    }
    
    public boolean isEmpty() {
        return tag == null || content.size() == 0;
    }
    
    @Override
    public String toString() {
        return tag.getName() + "=" + content;
    }
}
