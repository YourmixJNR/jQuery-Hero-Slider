$(document).ready(function(){


    let currentIndex = 0; // Initialize the current index for the slideshow
    let jsonData; // Store JSON data
    let slideInterval; //Interval for automatic sliding

    // Function to fetch JSON data and initiate
    function fetchAndInitiateSlideshow() {
        $.ajax({
            url: 'heroSection.json',
            type: 'GET',
            dataTyped: 'json',
            success: function(data){
                jsonData = data; // Store the JSON data
                showSlide(currentIndex);

                addEventHandlers(); // Add event handlers for next and previous buttons

                startSlideShow();
            },
            error: function(status, error){
                console('Error Fetching Data', status, error)
            }
        });
    }

    // Function to show a specific slide
    function showSlide(index) {
        const item = jsonData[index];
        const heroContainer = $('.hero .slider');
        heroContainer.empty();

        const imgURL = item.backgroundImg;
        const bigText = item.bigText;
        const smallText = item.smallText;

        const slideHTML = `
            <div class="slide">
                <img src="${imgURL}" alt="Slide Image">
                <div class="hero-content">
                    <h1>${bigText}</h1>
                    <p>${smallText}</p>
                </div>
            </div>
        `;

        heroContainer.append(slideHTML);
    }

    // Function to start the automatic slideshow
    function startSlideShow() {
        slideInterval = setInterval(function(){
            currentIndex = (currentIndex + 1) % jsonData.length;
            showSlide(currentIndex);
        }, 3000); // Change slide every 3 seconds
    };

    // Function for next and previous buttons
    function addEventHandlers() {
        $('.next-button').on('click', function(){
            currentIndex = (currentIndex + 1) % jsonData.length;
            showSlide(currentIndex);
            resetSlideshowInterval(); // Reset the interval when manually navigating
        });

        $('.prev-button').on('click', function(){
            currentIndex = (currentIndex - 1 + jsonData.length) % jsonData.length;
            showSlide(currentIndex);
            resetSlideshowInterval(); // Reset the interval when manually navigating
        })
    };
    
    // Function to reset the slideshow interval when manually navigating
    // Function to reset the slideshow interval when manually navigating
    function resetSlideshowInterval() {
        clearInterval(slideInterval);
        startSlideshow();
    }

    // Initialize the slideshow
    fetchAndInitiateSlideshow();

});