import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def make_white_transparent(img_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    # threshold for white
    for item in datas:
        # If it's mostly white, make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Optional: Apply some antialiasing/smoothing logic if needed, but a simple white replace usually leaves some artifacts. 
    # To do it better, we can use a soft alpha mask based on luminance if it's a black/colored logo on white.
    
    # Since we want smooth clean edges, let's refine this to create an alpha channel inversely proportional to whiteness.
    return img

def make_white_transparent_smooth(img_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    
    # Create a new image for the result
    new_img = Image.new("RGBA", img.size)
    pixels = new_img.load()
    orig_pixels = img.load()
    
    for y in range(img.size[1]):
        for x in range(img.size[0]):
            r, g, b, a = orig_pixels[x, y]
            # Calculate how close the pixel is to white
            whiteness = (r + g + b) / 765.0 # 0.0 to 1.0
            
            # If it's pure white, alpha is 0. If it's pure black, alpha is 255.
            # But the logo might have colors. We only want to remove the white background.
            # Usually logos are dark or colored on a white background.
            if r > 245 and g > 245 and b > 245:
                # purely background
                pixels[x, y] = (r, g, b, 0)
            elif r > 200 and g > 200 and b > 200:
                # anti-aliased edge pixel
                # scale alpha
                alpha = int(255 * (255 - max(r,g,b)) / 55.0)
                alpha = max(0, min(255, alpha))
                # keep original color but reduce alpha
                pixels[x, y] = (r, g, b, alpha)
            else:
                pixels[x, y] = (r, g, b, a)

    new_img.save(sys.argv[2] if len(sys.argv) > 2 else img_path, "PNG")
    print(f"Processed {img_path}")

if __name__ == '__main__':
    if len(sys.argv) > 1:
        make_white_transparent_smooth(sys.argv[1])
    else:
        print("Usage: python remove_bg.py <input_path> [<output_path>]")
