from PIL import Image

# Open the original laptop hero image
try:
    img = Image.open('public/Assets/hero bg for laptop view.jpeg')
    width, height = img.size
    
    # We want the right side of the image where the teacher and students are.
    # Let's crop the right 60% of the image.
    left = int(width * 0.4)
    top = 0
    right = width
    bottom = height
    
    cropped_img = img.crop((left, top, right, bottom))
    
    # Save the new cropped image
    cropped_img.save('public/Assets/about-classroom.jpg', quality=95)
    print(f"Successfully cropped image! Saved to public/Assets/about-classroom.jpg")
    print(f"Original size: {width}x{height}")
    print(f"Cropped size: {cropped_img.size[0]}x{cropped_img.size[1]}")
except Exception as e:
    print(f"Error: {e}")
