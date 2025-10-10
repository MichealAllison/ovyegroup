#!/bin/bash

# Image optimization script for OvyeGroup website
# This script helps reduce image file sizes for better performance

echo "OvyeGroup Image Optimization Helper"
echo "=================================="
echo ""

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo "ImageMagick is not installed. Please install it first:"
    echo ""
    echo "Windows (with Chocolatey): choco install imagemagick"
    echo "Windows (with Winget): winget install ImageMagick.ImageMagick"
    echo "macOS (with Homebrew): brew install imagemagick"
    echo "Ubuntu/Debian: sudo apt-get install imagemagick"
    echo ""
    exit 1
fi

# Navigate to images directory
cd "$(dirname "$0")/public/images" || exit 1

echo "Current image sizes:"
ls -lh *.png | awk '{print $9 ": " $5}'
echo ""

# Create optimized versions
echo "Creating optimized versions..."
echo ""

# Function to optimize images
optimize_image() {
    local input="$1"
    local output="$2"
    local quality="$3"
    local max_width="$4"
    
    echo "Optimizing $input -> $output (Quality: $quality%, Max width: ${max_width}px)"
    
    # Create WebP version
    magick "$input" -resize "${max_width}x>" -quality "$quality" "${output%.png}.webp"
    
    # Create optimized PNG version
    magick "$input" -resize "${max_width}x>" -quality "$quality" -strip "$output"
}

# Optimize hero/background images (lower quality, reasonable size)
if [ -f "bg.png" ]; then
    optimize_image "bg.png" "bg-optimized.png" 60 1920
fi

if [ -f "visionimg.png" ]; then
    optimize_image "visionimg.png" "visionimg-optimized.png" 65 1200
fi

if [ -f "business2.png" ]; then
    optimize_image "business2.png" "business2-optimized.png" 65 1920
fi

if [ -f "about2.png" ]; then
    optimize_image "about2.png" "about2-optimized.png" 65 1920
fi

if [ -f "team.png" ]; then
    optimize_image "team.png" "team-optimized.png" 70 1200
fi

# Optimize business sector images (medium quality)
for img in realestate.png manufacturing.png energy.png technology.png businessimg.png; do
    if [ -f "$img" ]; then
        optimize_image "$img" "${img%.png}-optimized.png" 70 800
    fi
done

# Optimize logos (high quality, smaller size)
if [ -f "ovglogo.png" ]; then
    optimize_image "ovglogo.png" "ovglogo-optimized.png" 85 400
fi

if [ -f "blackovglogo.png" ]; then
    optimize_image "blackovglogo.png" "blackovglogo-optimized.png" 85 400
fi

echo ""
echo "Optimization complete! New file sizes:"
ls -lh *-optimized.* | awk '{print $9 ": " $5}'
echo ""

echo "To use the optimized images:"
echo "1. Backup your original images"
echo "2. Replace original files with optimized versions"
echo "3. Update image references in your code if needed"
echo ""

echo "Manual replacement commands:"
echo "mv bg-optimized.png bg.png"
echo "mv visionimg-optimized.png visionimg.png"
echo "# ... repeat for other files"