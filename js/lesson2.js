// ЗАДАЧА 1
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };

// user.mood = 'happy';
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(key, " : ", user[key]);
// }

// console.log(user);

// ЗАДАЧА 2
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ


//  const salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
//  };
// function totalSalary(salaries) {
//     let total = 0;
//     for (const key in salaries) {
//         total += salaries[key];
//     }
//     return total;
    
// }

// function totalSalary(salaries) {
// 	let total = 0;

// 	const values = Object.values(salaries);
// 	for (const value of values) {
// 		total += value;
// 	}
// 	return total;
// }
//  console.log(totalSalary(salaries));

// ЗАДАЧА 3
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запитує 2 значення у юзера і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень;
// mult() -перемножує значення збережені і повертає результат;

//  const calculator = {
//  a: null,
//  b: null,

// 	 read() {
// 		 this.a = Number(prompt('Введіть значення a'));
// 		 this.b = Number(prompt('Введіть значення b'));
// 	},

// 	 sum() {
// 		 return this.a + this.b;
// 	},

// 	 mult() {
// 		 return this.a * this.b;
// 	},
// };


// calculator.read();
// console.log(`sum`, calculator.sum());
// console.log(`mult`, calculator.mult());
// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача, через prompt і викликає колбек функцію(callback)
// greet(name) - колбек, який приймає імя і логінує в консоль рядок  "Привіт" + імя

function letMeSeeYourName(callback) 
{
    let name = prompt("Назвіть своє ім'я");
    callback(name);
    
}
function greet(name) {
    console.log(`Привіт, ${name}`);
}
letMeSeeYourName(greet);
