$(document).ready(function() {
    // Use jQuery to make an AJAX request
    $.ajax({
        url: 'heroSection.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // This function is executed when the request succeeds
            const heroDataArr = data; // Renamed dataArr to heroDataArray

            heroDataArr.forEach((item, index) => {
                
                if(index === 0) {
                const imageURL = item.backgroundImg;
                const imageElement = $('<img>');
                imageElement.attr('src', imageURL);

                const bigText = item.bigText;
                const bigTextElement = $('<h1>');
                bigTextElement.text(bigText);

                const smallText = item.smallText; 
                const smallTextElement = $('<p>');
                smallTextElement.text(smallText);

                const heroContainer = $('.hero');
                heroContainer.append(imageElement);
                heroContainer.append(bigTextElement);
                heroContainer.append(smallTextElement);
                }

            });
        },
        error: function(xhr, status, error) {
            // This function is executed if there's an error
            console.error('Error fetching data:', status, error);
        }
    });
});
