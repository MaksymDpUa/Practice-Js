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
// const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
// const formEl = document.querySelector('#form');
// const inputEl = document.querySelector('#input');
// const container = document.querySelector('.Js-container')

// formEl.addEventListener('submit', onInput)

// function onInput(evt) {
//   evt.preventDefault();
//   const value = inputEl.value;

//   fetch(`${URL}?s=${value}`).then(resp=>resp.json()).then(data=> createList(data.drinks
// )).catch(err=>console.log(err))
// }

// function createMarkUp ({ strDrinkThumb, strDrink
// }) {
//   const markUp = `<div><img src="${strDrinkThumb}" alt="${strDrink}">
//   <p>${strDrink}</p></div>`;
//   container.insertAdjacentHTML('beforeend',markUp)
// };

// function createList(arr) {
//   arr.forEach(el=>createMarkUp(el))
// };

// ЗАДАЧА 3
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user
//  <div id='root'>
//     <form id='form'>
//         <input type="text" id="input">
//       <button>Пошук</button>
//     </form>
//   </div>
// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)

// const form = document.querySelector("#form");
// const input = document.querySelector("#input");
// const divUser = document.querySelector(".js-user");
// const btnNestPage = document.querySelector(".js-btn");
// let pageItems = 1;

// form.addEventListener("submit", onInput);

// function onInput(evt) {
//   evt.preventDefault();
//   const inputValue = input.value;

//   fetch(
//     `https://api.github.com/search/users?q=${inputValue}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&page=${pageItems}&per_page=5`
//   )
//     .then((resp) => resp.json())
//     .then((data) => {
//       if (data.items.length > 0) {
//         createList(data.items);
//         pageItems++;
//       } else {
//         alert("The end");
//       }
//     })
//     .catch((err) => console.log(err.message));
// }

// function createMarkup({ avatar_url, login }) {
//   const markup = `<div>
//     <img src="${avatar_url}" alt="${login}">
//     <h2>${login}</h2>
//   </div>`;
//   divUser.insertAdjacentHTML("beforeend", markup);
// }

// function createList(arr) {
//   arr.forEach((item) => createMarkup(item));
// }

// btnNestPage.addEventListener("click", onInput);

// ЗАДАЧА 3
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user
//  <div id='root'>
//     <form id='form'>
//         <input type="text" id="input">
//       <button>Пошук</button>
//     </form>
//   </div>
// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)

// const form = document.querySelector("#form");
// const input = document.querySelector("#input");
// const divUser = document.querySelector(".js-user")

// form.addEventListener('submit', onInput);

// function onInput(e){
// 	e.preventDefault();
// 	const inputValue = input.value;
// 	console.log(inputValue);
// 	fetch(`https://api.github.com/search/repositories?q=${inputValue}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)
// 		.then(resp => resp.json())
// 		.then(data => createList(data.items))
// 		.catch(err => console.log(err));
// }
 
// function createMarkup({ clone_url, owner: { login } }) {
//   const markup = `<div>
//     <a href="${clone_url}">Посилання</a>
//     <h2>${login}</h2>
//   </div>`;
//   divUser.insertAdjacentHTML("beforeend", markup);
// }

// function createList(arr) {
//   arr.forEach((item) => createMarkup(item));
// }
