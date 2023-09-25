// Global variables
// const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=tacos`;
const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";
const foodItems = document.querySelector(".food-items");
const foodImgDisplay = document.querySelector("#food-img");
const img = document.createElement("img");
const dropdownItem = document.querySelector(".dropdown-item");
const dropdownLi = document.createElement("li");

// Fetch Request
fetch(apiUrl)
  .then((response) => response.json())
  .then((foodObj) => console.log(foodObj))
  .catch((error) => console.log("There was an error"));

// Helper functions

// const renderFood = (foodObj) => {
//   console.log(foodObj);
//   foodObj.results.forEach((food) => {
//     const foodImg = food.image;
//     img.setAttribute("id", "foodImg");
//     img.src = foodImg;
//     foodImgDisplay.appendChild(img);
//   });
//   renderFoodList(foodObj);
// };

// const renderFoodList = (foodObj) => {
//   foodObj.results.forEach((foodTitle) => {
//     const foodName = foodTitle.title;
//   });
// };

// Render food names to dropdown btns

// User form input

// submit button
