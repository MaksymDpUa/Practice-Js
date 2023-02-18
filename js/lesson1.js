// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА,
// МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"


// const firstName = "Галина";
// const age = 35;
// const course = "JAVASCRIPT";


// let message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${firstName}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${course}`;
// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ, ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ
// "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"


// const firstName = prompt("Ваше ім'я").toUpperCase();
// const telefon = prompt("Ваш телефон");
// const mail = prompt("Ваша електронна адреса");

// console.log(`КОРИСТУВАЧ ${firstName} ВИКОРИСТОВУЄ ${mail} ПОЧТУ І ${telefon} ТЕЛЕФОН`);

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const sum1 = Number(prompt("Введіть ціну"));
// const sum2 = Number(prompt("Введіть ціну"));
// const sum3 = +prompt("Введіть ціну"); //В старих версіях використовують "+", але це погана практика!

// let total = sum1 + sum2 + sum3;
// console.log(total); 

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ: 
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО,
//  ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ 
// "НЕ ЗНАЄТЕ? 12"

// const yers = Number(prompt('Кількість місяців має рік'));

// if (yers === 12) {
// 	console.log('вірно');
// } else {
// 	console.log('помилка');
// }

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І 
// ОПРИДІЛЯТИМЕ ЧИ ЦІЛЕ ЦЕ ЧИСЛО, ЧИ НЕ ЦІЛЕ

// const num = Number(prompt('Введіть число'));
//  if (num % 2 === 0) {
// 	console.log('ціле');
//  } else {
// 	console.log('не ціле число');
//  }

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ,
//  І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const mon = Number(prompt('Введіть місяць народження'))

// if (mon === 12 || mon === 1 || mon === 2) {
// 	console.log('зима');
// } else if (mon >= 3 && mon <= 5){ 
//  console.log('весна');
// } else if (mon >= 6 && mon <= 8) {
// 	console.log('літо');
// } else if (mon >= 9 && mon <= 11) {
// 	console.log('осінь');
// }else {
// 	console.log('Введіть коректний місяць');
// }

// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// // Джаз, Блюз
// // Джаз, Блюз, Рок-н-ролл
// // Джаз, Классика, Рок-н-ролл
// // Классика, Рок-н-ролл
// // Рэп, Регги, Классика, Рок-н-ролл

// const styles = ['«Джаз»', '«Блюз»'];

// styles.push('«Рок-н-ролл»');
// console.log(styles);
// styles.splice(1, 1, '«Классика»');
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift('«Рэп»', '«Регги»');
// console.log(styles);

// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль 
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const fruits = ['Mango', 'Poly', 'Ajax']; 

// // function logItems(array) {
// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(i, fruits[i]);
// //     }
// // };

// // logItems()

// for (let fruit of fruits) {
//     console.log(fruits.indexOf(fruit)+1, fruit);
// }

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// // console.log(findSmallestNumber([2, 17, 94, 1, 23, 37])); 
// // console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// const numbers = [2, 17, 94, 1, 23, 37];
// let num = numbers[0];

// for (let number of numbers) {
//     if (num > number) {
//         num = number;
//     }
// }

// console.log(num);

// function findSmallestNumber(numbers) {
//     let num = numbers[0];

// for (let number of numbers) {
//     if (num > number) {
//         num = number;
//     }
// }
//     return num;
// };

// console.log(findSmallestNumber([49, 4, 83, 7, 12]));
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));