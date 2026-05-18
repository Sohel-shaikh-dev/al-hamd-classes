import sys
from PIL import Image

def restore_white_bg(img_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    
    # Create a new white background image
    new_img = Image.new("RGBA", img.size, "WHITE")
    
    # Paste the original image using alpha channel as mask
    new_img.paste(img, (0, 0), img)
    
    # Save it back as PNG
    new_img.save(img_path, "PNG")
    print("Restored white background")

if __name__ == '__main__':
    restore_white_bg('public/Alhamd Logo.png')
