// Global variables

const form = document.querySelector("#new-form");
const submittedMeal = document.querySelector("#submitted-meal-container");
const toggleEl = document.querySelector(".dropdown-toggle");
const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`;
const foodItems = document.querySelector(".food-items");
const foodImgDisplay = document.querySelector("#food-img");
const dropdownItem = document.querySelector(".dropdown-item");
const dropdownMenu = document.querySelector(".dropdown-menu");
const country = document.querySelector(".country");
const foodImg = document.querySelector("#food-img");
const dropdownFoodItems = document.querySelector(".dropdown-food-item");
const selectedEntree = document.querySelector(".selectedEntree");
const selectedImage = document.querySelector(".selectedImage");
// Fetch Request
const fetchApi = () => {
  fetch(apiUrl + selectedCountry)
    .then((response) => response.json())
    .then((mealData) => renderMeals(mealData))
    .catch((error) => console.log("There was an error"));
};

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
// const sendMealToAPI = (mealObj) => {
//   fetch(apiUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(),
//   })
//     .then((resp) => resp.json())
//     .then((mealArr) => console.log(mealArr))
//     .then((mealArr) => mealArr.map(mealObj))
//     .catch((err) => alert("Cannot Save"));
// };

var selectedCountry = "";
dropdownMenu.addEventListener("click", (e) => {
  selectedCountry = e.target.text;
  country.textContent = selectedCountry;
  fetchApi();
});

const entree = document.querySelector(".entree");
const renderMeals = (mealData) => {
  const meals = mealData.meals;
  meals.forEach((foodItem) => {
    entreeMenu(foodItem);
    // renderImg(foodItem);
  });
};
const entreeMenu = (foodItem) => {
  const li = document.createElement("li");
  li.setAttribute("id", "meal-item");
  li.textContent = foodItem.strMeal;
  li.addEventListener("click", () => {
    selectedImage.innerHTML = "";
    renderImg(foodItem);
  });

  entree.appendChild(li);
};
const renderImg = (foodItem) => {
  const img = document.createElement("img");
  img.setAttribute("id", "meal-item");
  img.src = foodItem.strMealThumb;
  selectedImage.appendChild(img);
};

// };

//  <!-- Alberto-branch -->

// Selected country's meals should be displayed into the drop down menu.

// Use the .filter() to filter the sides and dessert. Will need another api for beverages.

// User form input

// submit button
//  <!-- anne-branch -->
