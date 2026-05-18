from PIL import Image
import collections

img = Image.open('public/Assets/hero bg  for mobile view.jpeg')
width, height = img.size

# Get the bottom 10 rows of pixels
bottom_pixels = []
for x in range(width):
    for y in range(height - 10, height):
        bottom_pixels.append(img.getpixel((x, y)))

# Average color
r = sum(p[0] for p in bottom_pixels) // len(bottom_pixels)
g = sum(p[1] for p in bottom_pixels) // len(bottom_pixels)
b = sum(p[2] for p in bottom_pixels) // len(bottom_pixels)

print(f"Average bottom color: #{r:02x}{g:02x}{b:02x}")

# Let's get the average color of the left half, center, and right half of the bottom row
left_pixels = []
for x in range(width // 3):
    left_pixels.append(img.getpixel((x, height - 1)))
lr = sum(p[0] for p in left_pixels) // len(left_pixels)
lg = sum(p[1] for p in left_pixels) // len(left_pixels)
lb = sum(p[2] for p in left_pixels) // len(left_pixels)
print(f"Left bottom color: #{lr:02x}{lg:02x}{lb:02x}")

center_pixels = []
for x in range(width // 3, 2 * width // 3):
    center_pixels.append(img.getpixel((x, height - 1)))
cr = sum(p[0] for p in center_pixels) // len(center_pixels)
cg = sum(p[1] for p in center_pixels) // len(center_pixels)
cb = sum(p[2] for p in center_pixels) // len(center_pixels)
print(f"Center bottom color: #{cr:02x}{cg:02x}{cb:02x}")

right_pixels = []
for x in range(2 * width // 3, width):
    right_pixels.append(img.getpixel((x, height - 1)))
rr = sum(p[0] for p in right_pixels) // len(right_pixels)
rg = sum(p[1] for p in right_pixels) // len(right_pixels)
rb = sum(p[2] for p in right_pixels) // len(right_pixels)
print(f"Right bottom color: #{rr:02x}{rg:02x}{rb:02x}")
