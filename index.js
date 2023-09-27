// Global variables

const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`;
const foodItems = document.querySelector(".food-items");
const foodImgDisplay = document.querySelector("#food-img");
const img = document.createElement("img");
const dropdownItem = document.querySelector(".dropdown-item");
const dropdownMenu = document.querySelector(".dropdown-menu");
const country = document.querySelector(".country");
const entree = document.querySelector(".entree");

const dropdownLi = document.createElement("li");



// Fetch Request
const fetchApi = () => {
  fetch(apiUrl + selectedCountry)
    .then((response) => response.json())
    .then((mealData) => renderMeals(mealData))
    .catch((error) => console.log("There was an error"));
};


// Helper functions
// When a country is selected, update the selected-country text content with country's name



const newForm = document.querySelector('.col-1');
const submittedMeal = document.querySelector('#submit-output');
const newMealType = document.querySelector('#new-meal-type');
const newMealName = document.querySelector('new-meal');
const newIngredients = document.querySelector('new-ingredients');
const newRecipe = document.querySelector('new-recipe');


//! Create submit event
// event needs to point to the form to listen
// need to post new data entered by user into the API and onto the page
// ? where should the submited data end up on page? !!! It should go into the Countries dropdown as an 'li'
//  may need to append data to a location on the page ^^
newForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // const newMealForm = (newObj) = {
      const addNewMealType = e.target['new-meal-type'].value
      const addMealName = e.target['new-meal'].value
      const addNewIng = e.target['new-ingredient'].value
      const addNewRecipe = e.target['new-recipe'].value
      // console.log(addMealName)
      // console.log(addNewMealType)
      // console.log(addNewIng)
      // console.log(addNewRecipe)
      const output = {
        
      }

    // }
    newForm.reset()
});    
// ! I need the submit to post the user information into the Country dropdown-menu list (li)
function renderSubmitForm(meal) {
  // addMealName.innerHTML = ""
  const listLi = document.createElement(li)
  listLi.className = 'list-li'
  const h3 = document.createElement('h3')
  h3.textContent = meal['new-meal']
  submittedMeal.appendChild(listLi)
}



// const submitHandler = (e) => {
//   e.preventDefault()
//   const userMeal = {
//     const addNewMealType = e.target['new-meal-type'].value
//     const addMealName = e.target['new-meal'].value
//     const addNewIng = e.target['new-ingredient'].value
//     const addNewRecipe = e.target['new-recipe'].value
//   }
//   renderSubmitForm(userMeal)
//   e.target.reset()
// }

// newForm.addEventListener('submit', submitHandler)
//  <!-- anne-branch -->

// !
var selectedCountry = "";
dropdownMenu.addEventListener("click", (e) => {
  selectedCountry = e.target.text;
  console.log(selectedCountry);
  country.textContent = selectedCountry;
  fetchApi();
});

// // Render img
const renderMeals = (mealData) => {
  mealData.meals.forEach((meal) => {
    const mealImgUrl = meal.strMealThumb;
    const mealName = meal.strMeal;
    img.src = mealImgUrl;

    listMeals(mealName);
  });
};
// // Selected country should be updated into the api using `${country} ` at the end of the api
// const listMeals = (mealName) => {
//   console.log(mealName);

//   dropdownLi.textContent = mealName;
//   dropdownItem.appendChild(dropdownLi);

//   const dropdownLi = document.createElement("li");
//   dropdownLi.classList.add("dropdown-item");
//   //   const foodList = (entree.innerHTML = dropdownLi.textContent = mealName);
//   const foodArray = [mealName];
//   foodArray.forEach((food) => {
//     dropdownLi.textContent = food;
//     entree.append(dropdownLi);
//   });

// };
// !

// Selected country's meals should be displayed into the drop down menu.

// Use the .filter() to filter the sides and dessert. Will need another api for beverages.

// User form input

// submit button

// !

// document.querySelector("#dropentree").addEventListener(`mouseover`,
//   function () {
//     //open modal
//     console.log("Modal")
//   })

// document.querySelector("#dropbev").addEventListener(`mouseover`,
//   function () {
//     //open modal
//     console.log("Modal")
//   })

// // }

// document.querySelector("#dropsides").addEventListener(`mouseover`,
//   function () {
//     //open modal
//     console.log("Modal")
//   })
// // }

// document.querySelector("#dropdessert").addEventListener(`mouseover`,
//   function () {
//     //open modal
//     console.log("Modal")
//   })
// !

/*
class hidden
hover over img
event listener for mouseover
remove hidden class

<div id="modal" class="hidden">
openModalBtn.addEventListener("mouseover", openModal);
 <h...> "FOOD RECIPE" </h...>
    <p id="modal-message"></p>

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown");


document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});



closeModalBtn.addEventListener("mouseover", closeModal);

</d>
*/

  
