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