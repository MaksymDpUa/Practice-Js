// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement

// js/

// html/
// <ul class="js-goods"></ul>
// {
//       name: 'pajero',
//       img: "https://smart-style.com.ua/uploads/mitsubishi-pajero-2011.jpg",
//       price: 950000,
//       description: "Широкий вибір комплектацій дозволяє підібрати автомобіль під ваші потреби та стиль життя. Тип привода, потужність двигуна та кількість місць у салоні — порівняти комплектації та ціни стало ще простіше.",
//     },

// import car from "./data/kar.js";
// const cars = document.querySelector(".js-goods");

// function creardCar({name, img, price, description}) {
// 	const liElement = document.createElement("li");
// 	const images = document.createElement('img');
// 	images.src = img;
// 	images.alt = name;
// 	images.width = 200;
// 	const nameElem = document.createElement("h2");
// 	nameElem.textContent = name;
// 	const priceElem = document.createElement("h3");
// 	priceElem.textContent = price;
// 	const desElem = document.createElement("p");
// 	desElem.textContent = description;
// 	liElement.append(nameElem, images, priceElem, desElem);
// 	return liElement;
// }

// const elements = car.map(creardCar)
// cars.append(...elements);

// ЗАДАЧА 2
// // 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// const priceEl = document.querySelector("#price");
// const quantityEl = document.querySelector("#quantity");
// const totalPrice = document.querySelector(".total");
// const form = document.querySelector(".form");
// const amountEl = document.querySelector(".amount");
// console.dir(priceEl);
// console.dir(quantityEl);

// const calculateTotalPrice = (event) => {
//   event.preventDefault();
//   amountEl.textContent = quantityEl.value;
//   let result = priceEl.value * quantityEl.value;
//   totalPrice.textContent = result;
// };

// window.addEventListener("DOMContentLoaded", calculateTotalPrice);

// form.addEventListener("submit", calculateTotalPrice);

// function typeQuantity() {
//   amountEl.textContent = quantityEl.value;
// }

// quantityEl.addEventListener("input", typeQuantity);

// // 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

// // 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ
// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// const container = document.querySelector(".container");

// container.style.backgroundColor = randomRgbColor();

// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
//  <ul class="js-list"></ul>

// const instruments = [{
//   id: 1,
//   img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
//   name: "Молоток",
//   price: 150
// },
// {
//   id: 2,
//   img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
//   name: "Перфоратор",
//   price: 3000
// },{
//   id: 3,
//   img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
//   name: "Рівень",
//   price: 2000
//     }]

// const listEl = document.querySelector(".js-list");

// function createMurcup() {
//     const murcup = instruments.map(({ id, img, name, price }) => {
//         return `<li id="${id}">
//     <img src="${img}" alt="${name}">
//     <h2>${name}</h2>
//     <span>${price}</span>
// </li>`;
//     }).join('');

//     listEl.insertAdjacentHTML('beforeend', murcup);
// }

// createMurcup();

// 3) УМОВА
// Зробити фіксований скрол на сторінці для менюшки, тобто, щоб наше меню фіксувалось зверху браузера при скролі, для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed - nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо

// const headerEl = document.querySelector('.header');
// const navEl = document.querySelector('.nav');

// const headerHeight = headerEl.clientHeight;

// function scrollEv() {
//     if (scrollY > headerHeight) {
//       navEl.classList.add("fixed-nav");
//     }
//     else {
//         navEl.classList.remove("fixed-nav");
//     }
// }

//     addEventListener("scroll", scrollEv);

// console.log(headerEl.clientHeight);
