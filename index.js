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
const newForm = document.querySelector(".col-1");
const newMealName = document.querySelector("new-meal");
const newIngredients = document.querySelector("new-ingredients");
const newRecipe = document.querySelector("new-recipe");
const mealModal = document.querySelector("#meal-modal");
const submitList = document.querySelector('#submission-list')

const aModal = document.getElementById("anneModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalIng = document.getElementById("modalIng");
const modalRec = document.querySelector('#modalRecipe')
const modalHeader = document.querySelector('.meal-name')

// Fetch Request
const fetchApi = () => {
  fetch(apiUrl + selectedCountry)
    .then((response) => response.json())
    .then((mealData) => renderMeals(mealData))
    .catch((error) => console.log("There wafvbs an error"));
};

newForm.addEventListener("submit", (e) => {
  e.preventDefault();
 
  const addMealName = e.target["new-side"].value;
  const addNewIng = e.target["new-beverage"].value;
  const addNewRecipe = e.target["new-dessert"].value;

  let li = document.createElement("li");
  li.textContent = addMealName;
  let newIngP = document.createElement('p')
  newIngP.textContent = addNewIng
  let newRecP = document.createElement('p')
  newRecP.textContent = addNewRecipe
  console.log(li)
  const modalBtn = document.createElement('button')
  modalBtn.setAttribute('id', 'submission-list')
  modalBtn.textContent = submitList
  
  // Function to open the modal
  function openModal(event) {
    modalIng.textContent = ""
    console.log(event.target)
    modalIng.textContent = addNewIng;
    aModal.classList.add("active");
  }
  submittedMeal.addEventListener("mouseover", openModal)
  
  // submitList.append(modalBtn)
  modalHeader.append(addMealName)
  modalIng.append(newIngP)
  modalRec.append(newRecP)
  submittedMeal.appendChild(li)
  newForm.reset();
});
// Add mouseover event listener to each li element


// Close the modal when the close button or overlay is clicked
closeModalBtn.addEventListener("click", () => {
  aModal.classList.remove("active");
});







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
  img.setAttribute("id", "dish-img");
  img.src = imgUrl;

  selectedImage.innerHTML = "";
  selectedImage.append(img);
});
