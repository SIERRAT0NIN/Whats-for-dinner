// Global variables

const form = document.querySelector('#new-form');
const submittedMeal = document.querySelector('#submitted-meal-container');
const toggleEl = document.querySelector('.dropdown-toggle')
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


const dropdownLi = document.createElement("li");

//MODAL TESTING START

//image.addEventListener(`click`, (e) => console.log(e.target))

function openModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

document.addEventListener("click", function (event) {
  if (!event.target.closest(".modal-content")) {
    closeModal();
  }
})



image.addEventListener(`click`, () => foodImgDisplay(mealData))
/*

image.addEventListener(`click`, () => foodImgDisplay(mealData))





*/
//MODAL TESTING END



const newMealType = document.querySelector("#new-form > div > select");
aec09233fc0216a7711c9fe9dbae2409b094c3
// Fetch Request
const fetchApi = () => {
  fetch(apiUrl + selectedCountry)
    .then((response) => response.json())
    .then((mealData) => renderMeals(mealData))
    .catch((error) => console.log("There wafvbs an error"));
};


// const newMealType = document.querySelector("#new-meal-type");
// const mealModal = document.querySelector('#meal-modal');






// Helper functions
// When a country is selected, update the selected-country text content with country's name



// Fetch Request


// Create submit event
// event needs to point to the form to listen
// need to post new data entered by user into the API and onto the page
// ? where should the submited data end up on page?
//  may need to append data to a location on the page
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
// })
// if (toggleEl.style.display === 'none' || toggleEl.style.display === '') {
//     toggleEl.style.display = 'block';
// } else {
//     toggleEl.style.display = 'none;'
// }
//   const mealData = mealData(form);
//   const mealObj = {};
//   mealData.forEach((value, key) => {
//     mealObj[key] = value;
//   })
//   sendMealToAPI(mealObj)
//   form.reset();
// });
// const sendMealToAPI = (mealObj => {
//   fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(mealObj),
//   })
//     .then(resp => resp.json())
//     .then(mealArr => console.log(mealArr))
//     .then(mealArr => mealArr.map(mealObj))
//     .catch(err => alert('Cannot Save'))
// });



const newForm = document.querySelector('.col-1');
// const submittedMeal = document.querySelector('#submit-output');
const newMealName = document.querySelector('new-meal');
const newIngredients = document.querySelector('new-ingredients');
const newRecipe = document.querySelector('new-recipe');
// const mealModal = document.querySelector('#meal-modal');

//! Create submit event
// event needs to point to the form to listen
// need to post new data entered by user into the API and onto the page
// ? where should the submited data end up on page? !!! It should go into the Countries dropdown as an 'li'
//  may need to append data to a location on the page ^^
newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const addNewMealType = newMealType.value;
  const addMealName = e.target["new-side"].value;
  const addNewIng = e.target["new-beverage"].value;
  const addNewRecipe = e.target["new-dessert"].value;

  const li = document.createElement("li");
  li.textContent = addMealName;
  submittedMeal.append(li);

  newForm.reset();
});
// ! Add modal to submitted meal li
// submittedMeal.addEventListener("mouseover", (e) => {
//   const li = document.createElement("li");
//   li.textContent = meal.name;
//   const div = document.createElement("div");
//   div.id = "meal-modal";
//   div.className = "modal";
//   const div2 = document.createElement("div");
//   div2.className = "modal-content";
//   const span = document.createElement("span");
//   span.className = "close";
// });

// ! Add modal to submitted meal li
submittedMeal.addEventListener('mouseover', (e) => {
  const li = document.createElement('li')
  li.textContent = meal.name
  const div = document.createElement('div')
  div.id = 'meal-modal'
  div.className = 'modal'
  const div2 = document.createElement('div')
  div2.className = 'modal-content'
  const span = document.createElement('span')
  span.className = 'close'


})



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




// closeModalBtn.addEventListener("mouseover", closeModal);
