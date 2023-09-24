// Global variables
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=tacos`;
// Fetch Request
fetch(URL)
  .then((response) => response.json())
  .then((foodObj) => renderFood(foodObj))
  .catch((error) => console.log("There was an error"));

// Helper functions

const renderFood = (foodObj) => {
  console.log(foodObj);
  foodObj.results.forEach((food) => {
    const foodName = food.title;
    const foodImg = food.image;
    console.log(foodName);
    console.log(foodImg);
  });
};

// Render images

// User form input

// submit button
