// Global variables
const form = document.querySelector("#new-form");
const submittedMeal = document.querySelector("#submitted-meal-container");
const toggleEl = document.querySelector(".dropdown-toggle");
const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`;
const foodItems = document.querySelector(".food-items");
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

const modal = document.getElementById("myModal");
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
    modal.classList.add("active");
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
  modal.classList.remove("active");
});







// ALBERTO
let selectedCountry = "";
let allMeals;

dropdownMenu.addEventListener("change", (e) => {
  selectedCountry = e.target.value;
  fetchApi();
});

const renderMeals = (mealData => {
  allMeals = mealData.meals
  const meals = mealData.meals;
  meals.forEach((foodItem) => {
    entreeMenu(foodItem);
  });
});

const entreeMenu = (foodItem) => {
  const option = document.createElement("option");
  option.setAttribute("value", foodItem.strMealThumb);
  option.classList.add("selectedEntreeImage");
  option.setAttribute("id", "selectedImg");
  option.textContent = foodItem.strMeal;
  entree.append(option);
};

// const dishImage = document.querySelector("#dish-img")
entree.addEventListener("change", (e) => {
  const imgUrl = e.target.value;
  const findMeal = allMeals.find(meal => meal.strMealThumb === imgUrl)
  const img = document.createElement("img");
  img.addEventListener("click", () => openModal(findMeal));
  img.setAttribute("id", "dish-img");
  img.src = imgUrl;
  // console.log(dishImage)
  selectedImage.innerHTML = "";
  selectedImage.append(img);
});


//Modal TESTING END

// function openModal() {

//   let modal = document.getElementById("myModal");
//   modal.style.display = "block";
// }

// selectedImage.addEventListener(`click`, () => {
//   let modal = document.getElementById("myModal");
//   modal.style.display = "block";
// });




// function closeModal() {
//   let modal = document.getElementById("myModal");
//   modal.style.display = "none";

// }

// document.addEventListener("click", function (event) {
//   if (!event.target.closest(".modal-content")) {
//     closeModal();
//   }
// })




// console.log(dishImage)

// selectedImage.addEventListener(`click`, () => {

//   let modal = document.getElementById("myModal");
//   modal.style.backgroundColor = "red";

// });







//listener to `#dish-img`
// document.addEventListener(`click`, function ())
//MODAL TESTING END
var modal = document.getElementById("myModal");
var openModalButton = document.getElementById("openModalButton");
var closeModalButton = document.getElementById("closeModalButton");

// Function to open the modal
function openModal(findMeal) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${findMeal.idMeal}`)
    .then(response => response.json())
    .then(mealInfo => {
      modal.innerHTML += `
      <h2>${mealInfo.meals[0].strMeal}</h2>
      <p>${mealInfo.meals[0].strInstructions}</p>
      <span>Source: ${mealInfo.meals[0].strSource}</span>
      `
    })
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listeners for opening and closing the modal
// dishImage.addEventListener("click", openModal);
// closeModalButton.addEventListener("click", closeModal);

// Close the modal when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
