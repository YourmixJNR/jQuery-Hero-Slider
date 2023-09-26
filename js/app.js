$(document).ready(function(){

    // Function to fetch JSON data
    $.ajax({
        url: 'heroSection.json',
        type: 'GET',
        dataTyped: 'json',
        success: function(data){
            jsonData = data; // Store the JSON data
        },
        error: function(status, error){
            console('Error Fetching Data', status, error)
        }
    });

});

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
            <h1>${bigText}</h1>
            <p>${smallText}</p>
        </div>
    `;

    heroContainer.append(slideHTML);
}