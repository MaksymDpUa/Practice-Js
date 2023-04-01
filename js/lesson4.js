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


import car from "./data/kar.js";
const cars = document.querySelector(".js-goods");

function creardCar({name, img, price, description}) {
	const liElement = document.createElement("li");
	const images = document.createElement('img');
	images.src = img;
	images.alt = name;
	images.width = 200;
	const nameElem = document.createElement("h2");
	nameElem.textContent = name;
	const priceElem = document.createElement("h3");
	priceElem.textContent = price;
	const desElem = document.createElement("p");
	desElem.textContent = description;
	liElement.append(nameElem, images, priceElem, desElem);
	return liElement;
}

const elements = car.map(creardCar)
cars.append(...elements);