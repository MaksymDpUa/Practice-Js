// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ` РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())`

const URL = "https://pixabay.com/api/";
const KEY = "16104754-fccb05fa4a4190bcc2750c19f";
const divEl = document.querySelector(".js-div");

fetch(`${URL}?key=${KEY}&orientation=horizontal&category=education`)
  .then((resp) => resp.json())
  .then((data) => addElements(data.hits))
  .catch((err) => console.log(err));

function createMarkup(elem) {
  const markup = document.createElement("img");
  markup.src = elem.previewURL;
  markup.width = 300;

  divEl.appendChild(markup);
}

function addElements(arr) {
  for (const el of arr) {
    createMarkup(el);
  }
}
