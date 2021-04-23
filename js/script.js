// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

let API =
  "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

$(".search-button").click(function() {
  let userSearch = $("input").val();
  fetch(API)
    .then(function(response) {
      return response.json();
    })

    .then(function(gifAPI) {
      $(".introText").append(`<img src="${gifAPI.data[0].images.original.url}">`);
    });
});
