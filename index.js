// Global variables
const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`;
const foodItems = document.querySelector(".food-items");
const foodImgDisplay = document.querySelector("#food-img");
const img = document.createElement("img");
const dropdownItem = document.querySelector("li.dropdown-item");
const dropdownMenu = document.querySelector(".dropdown-menu");
const country = document.querySelector(".country");
const entree = document.querySelector(".entree");

// 2nd API for food categorie (side)
const secoundApi = `www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;
// Fetch Request
const fetchApi = () => {
  fetch(apiUrl + selectedCountry)
    .then((response) => response.json())
    .then((mealData) => renderMeals(mealData))
    .catch((error) => console.log("There was an error"));
};

// Helper functions

// When a country is selected, update the selected-country text content with country's name

var selectedCountry = "";
dropdownMenu.addEventListener("click", (e) => {
  selectedCountry = e.target.text;
  console.log(selectedCountry);
  country.textContent = selectedCountry;
  fetchApi();
});

// Render img
const renderMeals = (mealData) => {
  mealData.meals.forEach(
    (meal) => {
      const mealImgUrl = meal.strMealThumb;
      const mealName = meal.strMeal;
      foodImgDisplay.setAttribute("id", "foodImg");
      foodImgDisplay.src = mealImgUrl;
      listMeals(mealName);
    },
    // Add event listener to dropdownItem (.dropdown-item)
    dropdownItem.addEventListener("click", (e) => {
      const selecteFoodItem = e.target.textContent;
      console.log(e.target.textContent);
    })
  );
};

// Selected country should be updated into the api using `${country} ` at the end of the api

const listMeals = (mealName) => {
  const dropdownLi = document.createElement("li");
  dropdownLi.classList.add("dropdown-item");
  const foodArray = [mealName];
  foodArray.forEach((food) => {
    dropdownLi.textContent = food;
    entree.append(dropdownLi);
  });
};

// Use the .filter() to filter the sides and dessert. Will need another api for beverages.

// User form input

// submit button
