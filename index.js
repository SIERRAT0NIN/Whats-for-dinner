// Global variables
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=tacos`;
const foodItems = document.querySelector(".food-items");
const foodImgDisplay = document.querySelector("#food-img");
const img = document.createElement("img");

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
    img.src = foodImg;
    foodImgDisplay.appendChild(img);
  });
};

// Render images

// User form input

// submit button
