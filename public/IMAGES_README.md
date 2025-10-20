# Required Images

Please add the following images to this `public/` directory:

## 1. logo.png
- **File**: ESG logo (transparent PNG recommended)
- **Dimensions**: Flexible (will be resized to ~40px height in nav)
- **Format**: PNG with transparency
- **Usage**: Navigation bar, footer, documentation headers
- **Source**: `/Users/andyremoto/Downloads/Logo Minimalista em Preto e Laranja.png`

## 2. coin.png
- **File**: ESG coin artwork for hero section
- **Dimensions**: 500x500px or larger (square)
- **Format**: PNG with transparency
- **Usage**: Homepage hero section (right side)
- **Source**: `/Users/andyremoto/Downloads/ChatGPT Image 13 de out. de 2025, 23_41_31 (1).png`

## 3. favicon.png
- **File**: Site favicon
- **Dimensions**: 32x32px or 64x64px
- **Format**: PNG
- **Usage**: Browser tab icon
- **Note**: Can be created from logo.png by resizing

## 4. opengraph.jpg
- **File**: Social media preview image
- **Dimensions**: 1200x630px (required by Open Graph)
- **Format**: JPG or PNG
- **Usage**: Facebook, Twitter, LinkedIn previews
- **Note**: Should include ESG branding and key message

## Quick Setup

If you have the images ready, run:

```bash
# Copy your images to this directory
cp /path/to/your/logo.png public/logo.png
cp /path/to/your/coin.png public/coin.png
cp /path/to/your/favicon.png public/favicon.png
cp /path/to/your/opengraph.jpg public/opengraph.jpg
```

## Placeholder Images

For development/testing, you can create simple placeholder SVGs or use the paths mentioned above if the files exist.

## After Adding Images

1. Delete this README file
2. Commit the images to your repository
3. Test the site to ensure all images load correctly

## Image Optimization Tips

- Use tools like TinyPNG or ImageOptim to compress images
- Keep file sizes under 200KB for best performance
- Ensure images have appropriate alt text in components
