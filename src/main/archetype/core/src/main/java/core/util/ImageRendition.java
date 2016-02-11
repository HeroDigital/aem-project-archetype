package ${package}.core.util;

import org.apache.commons.lang3.StringUtils;

/**
 * Canonical record of all renditions supported by this site. 
 * 
 * @author joelepps
 *
 */
public enum ImageRendition {
    
    LANDSCAPE_LARGE        (1920, 1080),
    LANDSCAPE_MEDIUM    (960, 540),
    SQUARE_MEDIUM        (720, 720),
    ORIGINAL            (0, 0);
    
    private final int width;
    private final int height;
    
    private ImageRendition(int width, int height) {
        this.width = width;
        this.height = height;
    }
    
    public String getRendition(String imagePath) {
        if (StringUtils.isBlank(imagePath)) return imagePath;
        
        if (this == ORIGINAL) {
            String ext = getExtension(imagePath);
            return imagePath + ".imgo." + ext;
        }
        // web images should always be jpg extension
        return imagePath + ".imgw." + width + "." + height + "." + "jpg";
    }
    
    private String getExtension(String imagePath) {
        if (imagePath != null && imagePath.contains(".png")) {
            return "png";
        } else if (imagePath != null && imagePath.contains(".jpg")) {
            return "jpg";
        } else if (imagePath != null && imagePath.contains(".svg")) {
            return "svg";
        } else {
            return "jpg"; // default
        }
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

}
