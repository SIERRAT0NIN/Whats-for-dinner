// Global variables
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=chicken`;
// Fetch Request

fetch(URL)
  .then((response) => response.json())
  .then((foodObj) => console.log(foodObj))
  .catch((error) => console.log("There was an error"));
// Helper functions

// Render images

// User form input

// submit button
