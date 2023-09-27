$(document).ready(function(){


    let currentIndex = 0; // Initialize the current index for the slideshow
    let jsonData; // Store JSON data

    // Function to fetch JSON data and initiate
    function fetchAndInitiateSlideshow() {
        $.ajax({
            url: 'heroSection.json',
            type: 'GET',
            dataTyped: 'json',
            success: function(data){
                jsonData = data; // Store the JSON data
                showSlide(currentIndex);
            },
            error: function(status, error){
                console('Error Fetching Data', status, error)
            }
        });
    }

    // Function to show a specific slide
    function showSlide(index) {
        const item = jsonData[index];
        const heroContainer = $('.hero');
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

    // Initialize the slideshow
    fetchAndInitiateSlideshow();
});