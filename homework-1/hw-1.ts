// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let greeting: string = "hello";
let site: string = "owu";
let domain: string = "com";
let country: string = "ua";
let num1: number = 1;
let num2: number = 10;
let num3: number = -999;
let num4: number = 123;
let float1: number = 3.14;
let float2: number = 2.7;
let hex: number = 16;
let isTrue: boolean = true;
let isFalse: boolean = false;

console.log(greeting);
console.log(site);
console.log(domain);
console.log(country);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(float1);
console.log(float2);
console.log(hex);
console.log(isTrue);
console.log(isFalse);

// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName: string = "Олександр";
let middleName: string = "Петрович";
let lastName: string = "Масло";

let person: string = firstName + " " + middleName + " " + lastName;
console.log(person);

// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a: number = 100;
let b: string = "100";
let c: boolean = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let userFirstName: string | null = prompt("Введіть ваше ім'я:");
let userMiddleName: string | null = prompt("Введіть ваше по-батькові:");
let userAge: string | null = prompt("Введіть ваші роки:");

console.log(userFirstName + " " + userMiddleName + " " + userAge);
