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
## Fetching Data

The ```fetchAndInitiateSlideshow``` function is responsible for fetching the JSON data from ```heroSection.json``` using jQuery's AJAX method. Once the data is retrieved successfully, it initiates the slideshow.

## Displaying Slides

The ```showSlide``` function displays a specific slide by updating the HTML content with the information from the JSON data. It sets the background image, title, and description for each slide.

## Automatic Slideshow

The ```startSlideShow``` function initializes an automatic slideshow that cycles through the slides every 3 seconds by updating the ```currentIndex```.

## Manual Navigation

You can manually navigate through the slides using the next and previous buttons. The ``addEventHandlers`` function adds event listeners to these buttons and calls ```resetSlideshowInterval``` to reset the slideshow interval when navigating manually.

## Resetting Slideshow Interval

The ```resetSlideshowInterval`` function clears the interval and restarts the automatic slideshow. This ensures that the slideshow continues to cycle even after manual navigation.