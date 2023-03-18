// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };

// function PersonMaker({ firstName, lastName, age, gender, interest }) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;

//     this.bio = function () {
//         console.log(`Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`);
//     }
//         this.greeting = function () {
//     console.log(`Привіт, я ${this.firstName}`)
//   }
// }
// const max = new PersonMaker({firstName: 'Max', lastName: 'Pon', age: 55, gender: 'male', interest: 'hobby'})
// console.log(max);
// max.bio();
// max.greeting();
// function PersonMaker( firstName, lastName, age, gender, interest ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;

//     this.bio = function () {
//         console.log(`Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`);
//     }
//         this.greeting = function () {
//     console.log(`Привіт, я ${this.firstName}`)
//   }
// }
// const max = new PersonMaker('Max', 'Pon', 55, 'male', 'hobby')
// console.log(max);
// max.bio();
// max.greeting();

// function PersonMaker(args) {
//     const { firstName, lastName, age, gender, interest } = args;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;

//     PersonMaker.prototype.bio = function () {
//         console.log(`Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`);
//     }
//         PersonMaker.prototype.greeting = function () {
//     console.log(`Привіт, я ${this.firstName}`)
//   }
// }


// const max = new PersonMaker({firstName: 'Max', lastName: 'Pon', age: 55, gender: 'male', interest: 'hobby'})
// console.log(max);
// max.bio();
// max.greeting();

// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

// class User {
//     constructor({username, age, numberOfPosts}) {
//         this.username = username;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//     }

//     getInfo() {
//         return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }

//     greating = () => {return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts`;}
// }

// const user1 = new User({username: 'User 1', age: 20, numberOfPosts: 10});
// console.log(user1.getInfo());
// console.log(user1);
// console.log(user1.greating());

// class Admin extends User {
//   constructor({ username, age, numberOfPosts, email }) {
//       super({ username, age, numberOfPosts });
//       this.email = email;
//     }
    
//     changeName(name) {
//         return this.username = name;
//     }
// }

// const admin = new Admin({ username: "User 1", age: 20, numberOfPosts: 10, email: 'admin@gmail.com' });
// console.log(admin);
// console.log(admin.changeName('Mango'));
// console.log(admin.changeName('Mango'));

// ЗАДАЧА 3
// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добавте методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.



// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         this.items.push(item);
//     }

//     removeItem(item) {
//         const index = this.items.indexOf(item);
//         if (!!~index) {
//             this.items.splice(index, 1);
//         }
//     }
// }

// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// console.table(items);
// items.addItem("Манго");
// console.table(items);
// items.removeItem("Ківі")
// console.table(items)