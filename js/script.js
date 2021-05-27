// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

let API =
  "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

$(".search-button").click(function() {
  let userSearch = $("input").val();
    API = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&rating=pg&api_key=dc6zaTOxFJmzC"
  fetch(API)
    .then(function(response) {
      return response.json();
    })

    .then(function(gifAPI) {
    let randNum = Math.floor(Math.random() * gifAPI.data.length);
    let smth = Math.floor(Math.random() * gifAPI.data.length);
    $(".main").append(`<img src="${gifAPI.data[randNum].images.original.url}"> <img src="${gifAPI.data[smth].images.original.url}">`);
    $(".introText").hide();
    });
});

$(".clear-button").click(function() {
  $(".main").empty();
  $(".introText").show();
});