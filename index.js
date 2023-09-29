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
const dropdownMenuEntree = document.querySelector(".entree-dropdown-menu");
const selectedEntreeImage = document.querySelector(".selectedEntreeImage");
const selectedImg = document.querySelector("#selectedImg");
const entree = document.querySelector(".entree");
const newMealType = document.querySelector("#new-form > div > select");

const newForm = document.querySelector('.col-1');
// const submitNewMeal = document.querySelector('#submit-output');
const newMealName = document.querySelector('new-meal');
const newIngredients = document.querySelector('new-ingredients');
const newRecipe = document.querySelector('new-recipe');
// const mealModal = document.querySelector('#meal-modal');


// const modal = document.getElementById("myModal");
// const openModalBtn = document.getElementById("openModalBtn");
// const closeModalBtn = document.getElementById("closeModalBtn");

const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalText = document.getElementById("modalText");

// Fetch Request

const fetchApi = () => {
  fetch(apiUrl + selectedCountry)
    .then((response) => response.json())
    .then((mealData) => renderMeals(mealData))
    .catch((error) => console.log("There was an error"));
};

//! Create submit event
// need to form new data entered by user into the API and onto the page
//  may need to append data to a location on the page ^^
newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // debugger;
  // const addNewMealType = newMealType.value;
  const addMealName = e.target["new-side"].value;
  const addNewIng = e.target["new-beverage"].value;
  const addNewRecipe = e.target["new-dessert"].value;

  let li = document.createElement("li");
  li.textContent = addMealName;
  const modalBtn = document.createElement('button')
  modalBtn.setAttribute('id', 'submitted-meal-container')
  modalBtn.textContent = addMealName
  // li.forEach(addMealName => {})
  
  // submittedMeal.append(li);
  submittedMeal.append(modalBtn)
  submittedMeal.appendChild(li)
  newForm.reset();
});

// Function to open the modal
function openModal(event) {
  const addNewRecipe = event.target.textContent;
  modalText.textContent = `Your Recipe: ${addNewRecipe}`;
  modal.classList.add("active");
}

// Add mouseover event listener to each li element
submittedMeal.addEventListener("mouseover", openModal);


// Close the modal when the close button or overlay is clicked
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});






// openModalBtn.addEventListener("click", () => {
//   console.log('')
//   modal.classList.add("active");
// });

// // Close the modal when the close button or overlay is clicked
// closeModalBtn.addEventListener("click", () => {
//   modal.classList.remove("active");
// });
// console.log(submittedMeal)

// ! Add modal to submitted meal li
// submittedMeal.addEventListener('mouseover', () => {
//   const li = document.createElement('li')
//   li.textContent = 'meal-name'
//   const div = document.createElement('div')
//   div.id = 'meal-modal'
//   div.className = 'modal'
//   const div2 = document.createElement('div')
//   div2.className = 'modal-content'
//   const span = document.createElement('span')
//   span.className = 'close'
//   submittedMeal.appendChild(li)

// })

// Open the modal when the open button is clicked



// ALBERTO
let selectedCountry = "";

dropdownMenu.addEventListener("change", (e) => {
  selectedCountry = e.target.value;
  fetchApi();
});

const renderMeals = (mealData) => {
  const meals = mealData.meals;
  meals.forEach((foodItem) => {
    entreeMenu(foodItem);
  });
};

const entreeMenu = (foodItem) => {
  const option = document.createElement("option");
  option.setAttribute("value", foodItem.strMealThumb);
  option.classList.add("selectedEntreeImage");
  option.setAttribute("id", "selectedImg");
  option.textContent = foodItem.strMeal;
  entree.append(option);
};

entree.addEventListener("change", (e) => {
  const imgUrl = e.target.value;
  const img = document.createElement("img");
  img.src = imgUrl;
  selectedImage.innerHTML = "";
  selectedImage.append(img);
});

