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
