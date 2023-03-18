// // ЗАДАЧА 1
// // Напишіть скрипт,для обєкта user в послідовності:

// //  добавляє поле mood із значенням 'happy'
// // замінює значення hobby на 'skydiving'
// // замінює значення  premium на false
// // виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

// //  const user = {
// //    name: "Mango",
// //    age: 20,
// //    hobby: "html",
// //    premium: true,
// // };

// // user.mood = 'happy';
// // user.hobby = "skydiving";
// // user.premium = false;

// // const keys = Object.keys(user);

// // for (const key of keys) {
// //     console.log(key, " : ", user[key]);
// // }

// // console.log(user);

// // ЗАДАЧА 2
// // У вас є обєкт , у якому зберігаються зарплати нашої команди.
// // Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// // Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// // ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ

// //  const salaries = {
// //    John: 100,
// //    Ann: 160,
// //    Pete: 130,
// //  };
// // function totalSalary(salaries) {
// //     let total = 0;
// //     for (const key in salaries) {
// //         total += salaries[key];
// //     }
// //     return total;

// // }

// // function totalSalary(salaries) {
// // 	let total = 0;

// // 	const values = Object.values(salaries);
// // 	for (const value of values) {
// // 		total += value;
// // 	}
// // 	return total;
// // }
// //  console.log(totalSalary(salaries));

// // ЗАДАЧА 3
// // Створи обєкт calculator(калькулятор) з 3-ма методами:
// // read()- запитує 2 значення у юзера і зберігає їх як значення обєкта;
// // sum() -повертає суму збережених значень;
// // mult() -перемножує значення збережені і повертає результат;

// //  const calculator = {
// //  a: null,
// //  b: null,

// // 	 read() {
// // 		 this.a = Number(prompt('Введіть значення a'));
// // 		 this.b = Number(prompt('Введіть значення b'));
// // 	},

// // 	 sum() {
// // 		 return this.a + this.b;
// // 	},

// // 	 mult() {
// // 		 return this.a * this.b;
// // 	},
// // };

// // calculator.read();
// // console.log(`sum`, calculator.sum());
// // console.log(`mult`, calculator.mult());
// // ЗАДАЧА 1
// // Напишіть дві функції:
// // letMeSeeYourName(callback) - запитує імя користувача, через prompt і викликає колбек функцію(callback)
// // greet(name) - колбек, який приймає імя і логінує в консоль рядок  "Привіт" + імя

// // function letMeSeeYourName(callback)
// // {
// //     let name = prompt("Назвіть своє ім'я");
// //     callback(name);

// // }
// // function greet(name) {
// //     console.log(`Привіт, ${name}`);
// // }
// // letMeSeeYourName(greet);

// // ЗАДАЧА 2
// // Напишіть дві функції:
// // makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// // showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;

// // function makeProduct(name, price, callback){
// //     const product = {
// //         name, price, id: Date.now(),
// //     }
// //     callback(product)
// // };
// // function showProduct(product) {
// //     console.log(product);
// // };

// // makeProduct("Холодильник", 100, showProduct);
// // ЗАДАЧА 3
// // МАЄМО МАСИВ, ПОТРІБНО:
// // 1)получити масив вчених які народились у 19ст;
// // 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;
// // 3) відсортувати по алфавіту;
// // 4)відсортувати по кількості прожитих років;
// // 5)відфільтрувати, хто народився в 15,16,17ст;
// // 6)знайти рік народження Albert Einstein;
// // 7)визначити, чи усі вчені працювали у 19ст;

// // const scientists = [
// //   {
// //     name: "Albert",
// //     surname: "Einstein",
// //     born: 1879,
// //     dead: 1955,
// //     id: 1,
// //   },
// //   {
// //     name: "Isaac",
// //     surname: "Newton",
// //     born: 1643,
// //     dead: 1727,
// //     id: 2,
// //   },
// //   {
// //     name: "Galileo",
// //     surname: "Galilei",
// //     born: 1564,
// //     dead: 1642,
// //     id: 3,
// //   },
// //   {
// //     name: "Marie",
// //     surname: "Curie",
// //     born: 1867,
// //     dead: 1934,
// //     id: 4,
// //   },
// //   {
// //     name: "Johannes",
// //     surname: "Kepler",
// //     born: 1571,
// //     dead: 1630,
// //     id: 5,
// //   },
// //   {
// //     name: "Nicolaus",
// //     surname: "Copernicus",
// //     born: 1473,
// //     dead: 1543,
// //     id: 6,
// //   },
// //   {
// //     name: "Max",
// //     surname: "Planck",
// //     born: 1858,
// //     dead: 1947,
// //     id: 7,
// //   },
// //   {
// //     name: "Katherine",
// //     surname: "Blodgett",
// //     born: 1898,
// //     dead: 1979,
// //     id: 8,
// //   },
// //   {
// //     name: "Ada",
// //     surname: "Lovelace",
// //     born: 1815,
// //     dead: 1852,
// //     id: 9,
// //   },

// //   {
// //     name: "Lise",
// //     surname: "Meitner",
// //     born: 1878,
// //     dead: 1968,
// //     id: 11,
// //   },
// //   {
// //     name: "Sarah E.",
// //     surname: "Goode",
// //     born: 1855,
// //     dead: 1905,
// //     id: 10,
// //   },
// //   {
// //     name: "Hanna",
// //     surname: "Hammarström",
// //     born: 1829,
// //     dead: 1909,
// //     id: 12,
// //   },
// // ];
// // // 1)получити масив вчених які народились у 19ст;

// // const arr = scientists.filter((el) => el.born >= 1800 && el.born < 1900);
// // const arrNames = arr.map(({ name, surname }) => `${name}, ${surname}`);
// // console.log(arr);
// // console.log(arrNames);

// // // 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;
// // const averYear = scientists.reduce((acc, el) => acc + (el.dead - el.born), 0);
// // console.log(averYear);
// // console.log(scientists.length);
// // console.log(averYear / scientists.length);



// // 3) відсортувати по алфавіту

// // const scien = [...scientists].sort((a, b)=> a.name[0] > b.name[0] ? -1 : 1);

// // console.log(scien)



// // 4)відсортувати по кількості прожитих років;

// // const scien = [...scientists].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
// // console.log(scien)




// // 5)відфільтрувати, хто народився в 15,16,17ст

// // const arr = scientists.filter((el) => el.born >= 1400 && el.born < 1700);

// // console.log(arr);


// // 6)знайти рік народження Albert Einstein;

// // const scient = scientists.find(({name, surname}) => name === "Albert" && surname === "Einstein");

<<<<<<< HEAD
// console.log(scient.born)
=======
// // console.log(scient.born)
>>>>>>> 285cc56673f1ae2ef0e5a6bfd1e512cc3e572d15






// // 7)визначити, чи усі вчені працювали у 19ст;

// // const scie = scientists.every((elem) => elem.born >= 1800 && elem.dead < 1900);

// // console.log(scie)







// // ЗАДАЧА 5
// // Виконати сортування масиву назв моніторів в алфавітному та зворотному алфавітному порядку.
// // const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];


// // ЗАДАЧА 6
// // Зібрати в allTopics масив усіх предметів всіх курсів використовуючи flatMap.
// // Використовуючи Array.prototype.filter виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи.

// ЗАДАЧА 6
// Зібрати в allTopics масив усіх предметів всіх курсів використовуючи flatMap.
// Використовуючи Array.prototype.filter виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи.
const allTopics = courses.flatMap(({ topics }) => topics).filter((cours, index,array) => array.indexOf(cours) === index);
console.log(allTopics);

// https://github.com/MaksymDpUa

// // const courses = [
// //   {
// //     name: "Basic HTML+CSS",
// //     topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
// //   },
// //   {
// //     name: "Intermediate HTML+CSS",
// //     topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
// //   },
// //   {
// //     name: "Basic JavaScript",
// //     topics: [
// //       "VSCode",
// //       "Type system",
// //       "Loops",
// //       "Functions",
// //       "Conditions",
// //       "Classes",
// //       "DOM",
// //       "Git",
// //       "GitHub",
// //     ],
// //   },
// //   {
// //     name: "Intermediate JavaScript",
// //     topics: [
// //       "VSCode",
// //       "NPM",
// //       "Bundlers",
// //       "Transpiling",
// //       "Promises",
// //       "AJAX",
// //       "Git",
// //       "GitHub",
// //     ],
// //   },
// // ];

// function DNAStrand(dna){
//   const arr = [...dna].reduce((acc, item) => {
//     if(item === "A") {
//       acc += "T";
//       return acc
//     } else if(item === "T") {
//       acc += "A";
//        return acc
//     }
//     else if(item === "G") {
//       acc += "C";
//        return acc
//     }
//     else if(item === "C") {
//       acc += "G";
//        return acc
//     }
//   }, "" )
// return acc
//   console.log(arr);
// }
// console.log(DNAStrand("AAAAA"));
