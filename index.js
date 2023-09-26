// Global variables
//  <!-- anne-branch -->

const form = document.querySelector("#new-form");

const submittedMeal = document.querySelector("#submitted-meal-container");
const toggleEl = document.querySelector(".dropdown-toggle");
//  <!-- anne-branch -->

const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`;
const foodItems = document.querySelector(".food-items");
const foodImgDisplay = document.querySelector("#food-img");
const img = document.createElement("img");
const dropdownItem = document.querySelector(".dropdown-item");
const dropdownMenu = document.querySelector(".dropdown-menu");
const country = document.querySelector(".country");
const entree = document.querySelector(".entree");

// Fetch Request
const fetchApi = () => {
  fetch(apiUrl + selectedCountry)
    .then((response) => response.json())
    .then((mealData) => renderMeals(mealData))
    .catch((error) => console.log("There was an error"));
};
//  <!-- anne-branch -->

// Helper functions
// When a country is selected, update the selected-country text content with country's name

//  <!-- anne-branch -->

// Fetch Request

// Create submit event
// event needs to point to the form to listen
// need to post new data entered by user into the API and onto the page
// ? where should the submited data end up on page?
//  may need to append data to a location on the page
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // if (toggleEl.style.display === 'none' || toggleEl.style.display === '') {
  //     toggleEl.style.display = 'block';
  // } else {
  //     toggleEl.style.display = 'none;'
  // }
  const mealData = mealData(form);
  const mealObj = {};
  mealData.forEach((value, key) => {
    mealObj[key] = value;
  });
  sendMealToAPI(mealObj);
  form.reset();
});
const sendMealToAPI = (mealObj) => {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mealObj),
  })
    .then((resp) => resp.json())
    .then((mealArr) => console.log(mealArr))
    .then((mealArr) => mealArr.map(mealObj))
    .catch((err) => alert("Cannot Save"));
};

//  <!-- anne-branch -->

var selectedCountry = "";
dropdownMenu.addEventListener("click", (e) => {
  selectedCountry = e.target.text;
  console.log(selectedCountry);
  country.textContent = selectedCountry;
  fetchApi();
});

// Render img
const renderMeals = (mealData) => {
  mealData.meals.forEach((meal) => {
    const mealImgUrl = meal.strMealThumb;
    const mealName = meal.strMeal;
    img.src = mealImgUrl;
    listMeals(mealName);
  });
};
// Selected country should be updated into the api using `${country} ` at the end of the api
const listMeals = (mealName) => {
  console.log(mealName);
  const dropdownLi = document.createElement("li");
  dropdownLi.classList.add("dropdown-item");
  //   const foodList = (entree.innerHTML = dropdownLi.textContent = mealName);
  const foodArray = [mealName];
  foodArray.forEach((food) => {
    dropdownLi.textContent = food;
    entree.append(dropdownLi);
  });
};

// Selected country's meals should be displayed into the drop down menu.

// Use the .filter() to filter the sides and dessert. Will need another api for beverages.

// User form input

// submit button
//  <!-- anne-branch -->
