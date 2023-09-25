// Global variables

const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=American`;
const foodItems = document.querySelector(".food-items");
const foodImgDisplay = document.querySelector("#food-img");
const img = document.createElement("img");
const dropdownItem = document.querySelector(".dropdown-item");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownLi = document.createElement("li");
const country = document.querySelector(".country");

// Fetch Request
fetch(apiUrl)
  .then((response) => response.json())
  .then((mealData) => renderMeals(mealData))
  .catch((error) => console.log("There was an error"));

// Helper functions
// When a country is selected, update the selected-country text content with country's name

dropdownMenu.addEventListener("click", (e) => {
  const selectedCountry = e.target.text;
  country.textContent = selectedCountry;
  console.log(selectedCountry);
  return selectedCountry;
});
// Render img

const renderMeals = (mealData) => {
  mealData.meals.forEach((mealImg) => {
    const mealImgUrl = mealImg.strMealThumb;
    img.src = mealImgUrl;
    foodImgDisplay.append(img);

    console.log(mealImg);
  });
};

// Selected country should be updated into the api using `${country} ` at the end of the api

// Selected country's meals should be displayed into the drop down menu.

// Use the .filter() to filter the sides and dessert. Will need another api for beverages.

// User form input

// submit button
