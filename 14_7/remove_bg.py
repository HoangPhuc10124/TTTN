from PIL import Image
import os

src_path = os.path.join(os.path.dirname(__file__), 'image', '8135ef44-c0a0-43df-9fe9-5dc21d6e7b2a.png')
dst_path = os.path.join(os.path.dirname(__file__), 'image', '8135ef44-c0a0-43df-9fe9-5dc21d6e7b2a-transparent.png')

img = Image.open(src_path).convert('RGBA')

pixels = img.load()
width, height = img.size
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a < 10:
            continue
        # detect nearly black background
        if r < 40 and g < 40 and b < 40:
            pixels[x, y] = (r, g, b, 0)

img.save(dst_path)
print('Saved', dst_path)
