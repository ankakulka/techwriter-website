---
sidebar_position: 1
title: "Convert image format using Python"
tags: ['python','python3', 'beginner-python', 'image-editing', 'coding', ' automate']
---

# Use Python to automate your daily tasks

In the days of ChatGPT automating your daily tasks has never been so easy. You can supercharge your automation workflows if you gain some basic understanding of programming. Python is a beginner-friendly programming language and can be used in multiple scenarios.
Here are some use cases to give you a taste of what you can do:

- Merge PDFs Using Python
- Convert image format using Python
- Enhance your images

Once you understand the basics, you can then expand this knowledge to build your own custom scripts. 
Even if you ask ChatGPT to write a script for you, some understanding of basic concepts will be useful, so that you can be more specific in your instructions and potentially catch errors. 

> **Note** Install Python version 3and Visual Studio Code. If you're on a Mac or a newer version of Windows, Pythons should already be pre-installed. 

<!-- CHEck by .... -->

## Merge PDFs Using Python

Working with PDF files can be a pain...but it doesn't have to be.
You don't even need any expensive software to handle PDFs: just a few lines of Python code will suffice.

In this tutorial, I'll show you how to easily merge multiple files without having to tinker in the Adobe Acrobat or a similar program, simply taking advantage of the capabilities of the PyPDF2 library.
This method is much quicker and cheaper and all the tools used here are free. 

1. **Organize your files**<br/>
 Gather all PDFs you want to merge in the same folder.
            <!-- You won't have to specify the full path for each file. -->
2. **Install the PyPDF2 library**<br/>

        Python doesn't include built-in tools to work with PDFs, so we'll need to import an external set of tools. 
        A set of these is called a library. 

        In the terminal, type `pip install PyPDF2`. <br/>

3. **Import PyPDF2 library**<br/>

To be able to work with the tools included in the library we've just imported, we need to add them to our Python file.
Go to Visual Studio code, and create a new file "app.py".
Then add this code to the file:

```python 
import PyPDF2
from PyPDF import PdfMerger
```

4. **Use PdfMerger**

We are now ready to work with the tools included in the PyPDF library. 
One of those is called PdfMerger, and as you might have guessed, allows us to merge PDFs. 
We need a container to hold our files in, as you would in a folder. In programming, this is called an object. 

Create an object called "merger".<br/>
By adding the equal sign, I tell Python that "merger" is a single object that is part of the PdfMerger class. 
A class is a blueprint used to create an object based on it.
<!-- For clarity, I called this object "merger" but you could call it something else, as long as the Python naming convention allows it.  -->

```python
merger = PdfMerger()
```

4. **Combine the files**

As in real life, we can use objects in different ways. Python allows us certain actions - these are called methods. 
One of those methods is "append".

This is called a method, and there are specific methods we can use built into the language. 
 
We'll use `append` method to attach files in the the consecutive order.<br/>
As we want all files appended to the merger object 

```python
for pdf in ["file1.pdf", "file2.pdf", "file3.pdf", "file4.pdf"]:
    merger.append(pdf)
```

5. Now our files are ordered, but we want to create a new file containing all of them. 
We use a `write()` method to create a new file:<br/>

```python
merger.write("my-new-merged-file.pdf")
```

6. To stop the program from running indefinitely, you need to close it: <br/>

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

<!-- ADD info how to write this file -->

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

<!-- ## Play with Image Filters

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
 -->
