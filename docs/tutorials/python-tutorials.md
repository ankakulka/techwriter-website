---
sidebar_position: 1
title: "Convert image format using Python"
tags: ['python','python3', 'beginner-python', 'image-editing', 'coding']
---

#  Use Python to automate your daily, boring tasks and optimize workflows


## Merge PDFs Using Python

Working with PDF files can a pain...but it doesn't have to be. 
You don't even need any expensive software to handle PDFs: just a few lines of Python code will suffice.

In this quick tutorial I'll show you how to easily merge multiple files without having to tinker in the Adobe Acrobat or a similar program, simply taking advantage of the capabilities of the PyPDF2 library.
This method is much quicker and cheaper and all the tools used here are free. 

I'm using Python version 3. 

> **Tip!** Some basic Python knowldege required!


1. Gather all PDFs you want to merge in the same folder.
    You won't have to specify the full path for each file.
2. Install the PyPDF2 package `pip install PyPDF2`.
3.  Import PyPDF2 python library and PdfMerger class:
```python 
import PyPDF2
from PyPDF import PdfMerger
```
4. Create an object to hold the PdfMerger class.
```python
merger = PdfMerger()
```
4. Loop over the PDF files. Use `append` method to attach files in the consecutive order.
```python
for pdf in ["file1.pdf", "file2.pdf", "file3.pdf", "file4.pdf"]:
    merger.append(pdf)
```
5. Create a new PDF file using `write()` method on the merger object:
```python
merger.write("my-new-merged-file.pdf")
```
6. To close the program, use the `close()` method:
```python
merger.close()
```

The resulting Python code:

 ```python
import PyPDF2
from PyPDF import PdfMerger
merger = PdfMerger()
for pdf in ["file1.pdf", "file2.pdf", "file3.pdf", "file4.pdf"]:
    merger.append(pdf)
merger.write("my-new-merged-file.pdf")
merger.close()
 ```

##  Convert image format using Python

There's plenty of image editing software out there, most notably Photoshop - 
but did you know you can also edit images using Python? 
While [Pillow](https://pillow.readthedocs.io/en/stable/index.html#), the Python library used in this tutorial, won't replace Photoshop,
it does help you to perform certain actions **faster** - and completely free.

In this introductory tutorial I'll show you how to convert image format using Pillow library.
You can then build on that knowledge to progress to the more advanced concepts, such as Image filters. 

I'm using Python version 3. 

> **Tip!** Some basic Python knowldege required!

### Install Pillow

First, we need to prepare our paints and brushes, in our case it means installing the Pillow library. <br/>

In your terminal type:
```bash
pip install Pillow
```

### Convert image format 

Converting the image format in the Pillow library is quick and easy.
In this example I'll show you how to convert a **JPEG** image to a **PNG**.

You can also use Pillow to convert to and from other popular image formats such as:
- BMP
- GIF
- EPS
- TIFF

Check out the docs for the [full list of supported formats](https://pillow.readthedocs.io/en/stable/handbook/image-file-formats.html).  

1. In your Python file, import `Image` from the Pillow library. 
The `Image` module contains a class of the same name.  

```python
from PIL import Image
```

2. Create an Image object and call the open method on it. Make sure that you add the correct path for the image location - my image is in the same folder as my Python file, so I don't need to  add it. 

```python
img = Image.open('some-pic.jpg')
```

3. Save as a png image: specify the file name and the extention (format) to save the image in the same folder. You can also save the image in a different location by adding the file path.

```python
im.save('converted-pic.png')
```

The resulting Python code:

```python
import Image

img = Image.open('some-pic.jpg')
im.save('converted-pic.png')
```


## Play with Image Filters

Pillow comes with some pre-defined filters so you can play around with those without much hassle. 
These filters include: 
- BLUR
- EMBOSS
- FIND_EDGES
- SHARPEN

1. Import ImageFilter module. 



Using one of these filters allows you to get the results quickly, without having to play around with the parameters.
 
### Gaussian blur

You can achieve more sophisticated results using custom filters. 
Gaussian blur filter allows you to add parameters for the radius, so deepending on the desired result,
you can choose to make the image extremely blurry or only ever so-slightly.


```python
edit = img.filter(ImageFilter.GaussianBlur(radius=25))
```

## Enhance your images

Import ImageEnhance 

```python
contrast_enhancer = ImageEnhance.Contrast(image) 
brightness_enhancer = ImageEnhance.Brightness(image) 
sharpness_enhancer = ImageEnhance.Sharpness(image) 
```

My full snippet

```python
from PIL import Image, ImageEnhance, ImageFilter, ImageColor
import os

# Define path to and from img folder
path = './imgs'
pathOut = '/maxEnhance'

for filename in os.listdir(path):
    img = Image.open(f"{path}/{filename}")
    edit = img.filter(ImageFilter.GaussianBlur(radius=25))
    color_enhancer = ImageEnhance.Color(edit)
    contrast_enhancer = ImageEnhance.Contrast(edit)
    brightness_enhancer = ImageEnhance.Brightness(edit)
    edit = color_enhancer.enhance(5)
    edit = brightness_enhancer.enhance(2)
    edit = contrast_enhancer.enhance(5)
    clean_name = os.path.splitext(filename)[0]

    edit.save(f'.{pathOut}/{clean_name}_max.jpg')
```

