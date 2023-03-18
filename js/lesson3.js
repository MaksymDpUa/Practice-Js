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

function PersonMaker(args) {
    const { firstName, lastName, age, gender, interest } = args;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interest = interest;

    PersonMaker.prototype.bio = function () {
        console.log(`Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`);
    }
        PersonMaker.prototype.greeting = function () {
    console.log(`Привіт, я ${this.firstName}`)
  }
}


const max = new PersonMaker({firstName: 'Max', lastName: 'Pon', age: 55, gender: 'male', interest: 'hobby'}) 
console.log(max);
max.bio();
max.greeting();