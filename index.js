// Global variables
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=tacos`;
const foodItems = document.querySelector(".food-items");
const foodImgDisplay = document.querySelector("#food-img");
const img = document.createElement("img");
const dropdownItem = document.querySelector(".dropdown-item");
// Fetch Request
fetch(URL)
  .then((response) => response.json())
  .then((foodObj) => renderFood(foodObj))
  .catch((error) => console.log("There was an error"));

// Helper functions

const renderFood = (foodObj) => {
  console.log(foodObj);
  foodObj.results.forEach((food) => {
    const foodImg = food.image;
    img.setAttribute("id", "foodImg");
    img.src = foodImg;
    foodImgDisplay.appendChild(img);
  });
  renderFoodList(foodObj);
};
const renderFoodList = (foodObj) => {
  foodObj.results.forEach((foodTitle) => {
    const foodName = foodTitle.title;

    dropdownItem.append(foodName);
  });
};

// Render food names to dropdown btns

// User form input

// submit button
