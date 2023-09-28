// Global variables

const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`;






const newForm = document.querySelector('.col-1');
const submittedMeal = document.querySelector('#submit-output');
const newMealType = document.querySelector('#new-meal-type');
const newMealName = document.querySelector('new-meal');
const newIngredients = document.querySelector('new-ingredients');
const newRecipe = document.querySelector('new-recipe');
// const mealModal = document.querySelector('#meal-modal');


//! Create submit event
// event needs to point to the form to listen
// need to post new data entered by user into the API and onto the page
// ? where should the submited data end up on page? !!! It should go into the Countries dropdown as an 'li'
//  may need to append data to a location on the page ^^
newForm.addEventListener('submit', (e) => {
    e.preventDefault()

      const addNewMealType = e.target['new-meal-type'].value
      const addMealName = e.target['new-meal'].value
      const addNewIng = e.target['new-ingredient'].value
      const addNewRecipe = e.target['new-recipe'].value

      const li = document.createElement('li')
      li.textContent = addMealName
      submittedMeal.append(li)
      
    newForm.reset()
});    
// ! Add modal to submitted meal li
submittedMeal.addEventListener('mouseover', (e) => {
  const li = document.createElement('li')
  li.textContent = 
  const div = document.createElement('div')
  div.id = 'meal-modal'
  div.className = 'modal'
  const div2 = document.createElement('div')
  div2.className = 'modal-content'
  const span = document.createElement('span')
  span.className = 'close'
  

})

