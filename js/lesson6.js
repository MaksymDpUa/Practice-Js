// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ` РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())`

// const URL = "https://pixabay.com/api/";
// const KEY = "16104754-fccb05fa4a4190bcc2750c19f";
// const divEl = document.querySelector(".js-div");

// fetch(`${URL}?key=${KEY}&orientation=horizontal&category=education`)
//   .then((resp) => resp.json())
//   .then((data) => addElements(data.hits))
//   .catch((err) => console.log(err));

// function createMarkup(elem) {
//   const markup = document.createElement("img");
//   markup.src = elem.previewURL;
//   markup.width = 300;

//   divEl.appendChild(markup);
// }

// function addElements(arr) {
//   for (const el of arr) {
//     createMarkup(el);
//   }
// // }


// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ  https://www.thecocktaildb.com/api.php , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

//   <div id='root'>
//     <form id='form'>
//         <input type="text" id="input">
//       <button>Пошук</button>
//     </form>
//   </div>
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
const formEl = document.querySelector('#form');
const inputEl = document.querySelector('#input');
const container = document.querySelector('.Js-container')

formEl.addEventListener('submit', onInput)

function onInput(evt) {
  evt.preventDefault();
  const value = inputEl.value;
  
  fetch(`${URL}?s=${value}`).then(resp=>resp.json()).then(data=> createList(data.drinks
)).catch(err=>console.log(err))
}

function createMarkUp ({ strDrinkThumb, strDrink
}) {
  const markUp = `<div><img src="${strDrinkThumb}" alt="${strDrink}">
  <p>${strDrink}</p></div>`;
  container.insertAdjacentHTML('beforeend',markUp)
};

function createList(arr) {
  arr.forEach(el=>createMarkUp(el))
};