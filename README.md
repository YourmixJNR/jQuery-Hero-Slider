# jQuery Hero Slider  

## Introduction

This README provides documentation for a dynamic slideshow component built using jQuery. This component fetches data from a JSON file and displays it as a slideshow on a webpage. The slideshow is designed to automatically cycle through images and text, enhancing the user experience.

### Getting Started

To use this slideshow component, follow these steps:

1. Include jQuery: Ensure that you have jQuery included in your project.

   ```html
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   ```
2. Create a JSON file named heroSection.json with the data for your slideshow. The JSON structure should include objects with backgroundImg, bigText, and smallText properties for each slide.

   ```html
   [
    {
        "backgroundImg": "image1.jpg",
        "bigText": "Slide 1 Title",
        "smallText": "Slide 1 Description"
    },
    {
        "backgroundImg": "image2.jpg",
        "bigText": "Slide 2 Title",
        "smallText": "Slide 2 Description"
    },
    // Add more slides as needed
   ```

3. Include the JavaScript code for the slideshow in your HTML file. Make sure to include this code inside a <script> tag within a $(document).ready() function.

    ```html
    $(document).ready(function(){
        // Your slideshow code here
    });
   ```
