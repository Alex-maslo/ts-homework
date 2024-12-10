// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array: (string | number | boolean)[] = [
  "Hello",
  42,
  true,
  "JavaScript",
  false,
  2.718,
  "Goodbye",
  100,
  "TypeScript",
  true,
];

for (let element of array) {
  console.log(element);
}

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

interface Book {
  title: string;
  pageCount: number;
  genre: string;
}

let book1: Book = {
  title: "The Hobbit",
  pageCount: 310,
  genre: "Fantasy",
};

let book2: Book = {
  title: "Pride and Prejudice",
  pageCount: 432,
  genre: "Romance",
};

let book3: Book = {
  title: "Sapiens: A Brief History of Humankind",
  pageCount: 498,
  genre: "Non-fiction",
};

console.log(book1);
console.log(book2);
console.log(book3);

//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

interface BookInfo {
  title: string;
  pageCount: number;
  genre: string;
  authors: { name: string; age: number }[];
}

let bookOne: BookInfo = {
  title: "1984",
  pageCount: 328,
  genre: "Dystopian",
  authors: [
    {
      name: "George Orwell",
      age: 46,
    },
  ],
};

let bookTwo: BookInfo = {
  title: "To Kill a Mockingbird",
  pageCount: 281,
  genre: "Fiction",
  authors: [
    {
      name: "Harper Lee",
      age: 89,
    },
  ],
};

let bookThree: BookInfo = {
  title: "The Great Gatsby",
  pageCount: 180,
  genre: "Classic",
  authors: [
    {
      name: "F. Scott Fitzgerald",
      age: 44,
    },
  ],
};

console.log(bookOne);
console.log(bookTwo);
console.log(bookThree);

//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

interface User {
  name: string;
  username: string;
  password: string;
}

let users: User[] = [
  { name: "Michael Jordan", username: "michaeljordan", password: "jumpman23" },
  { name: "Scottie Pippen", username: "scottiepippen", password: "pip33" },
  { name: "Dennis Rodman", username: "dennisrodman", password: "reboundking" },
  { name: "Ron Harper", username: "ronharper", password: "defense" },
  { name: "Toni Kukoc", username: "tonikukoc", password: "eurostar" },
  { name: "Luc Longley", username: "luclongley", password: "australian" },
  { name: "Bill Cartwright", username: "billcartwright", password: "bigman" },
  { name: "Steve Kerr", username: "stevekerr", password: "threepointer" },
  { name: "John Paxson", username: "johnpaxson", password: "clutch" },
  { name: "B.J. Armstrong", username: "bjarmstrong", password: "pointguard" },
];

for (let { password } of users) {
  console.log(password);
}

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

interface Temp {
  day: string;
  morning: number;
  afternoon: number;
  evening: number;
}

const weeklyTemperatures: Temp[] = [
  { day: "Monday", morning: 15, afternoon: 22, evening: 18 },
  { day: "Tuesday", morning: 16, afternoon: 23, evening: 19 },
  { day: "Wednesday", morning: 14, afternoon: 21, evening: 17 },
  { day: "Thursday", morning: 17, afternoon: 24, evening: 20 },
  { day: "Friday", morning: 18, afternoon: 25, evening: 21 },
  { day: "Saturday", morning: 19, afternoon: 26, evening: 22 },
  { day: "Sunday", morning: 20, afternoon: 27, evening: 23 },
];

console.log(weeklyTemperatures);

// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x: number = 1;
console.log(x !== 0 ? `Вірно` : `Невірно`);

x = 0;
console.log(x !== 0 ? `Вірно` : `Невірно`);

x = -3;
console.log(x !== 0 ? `Вірно` : `Невірно`);

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time: number = 29;

if (time >= 0 && time <= 59) {
  switch (true) {
    case time < 15:
      console.log(`Перша чверть`);
      break;
    case time < 30:
      console.log(`Друга чверть`);
      break;
    case time < 45:
      console.log(`Третя чверть`);
      break;
    case time <= 59:
      console.log(`Четверта чверть`);
      break;
  }
} else {
  console.log(`Невірне значення`);
}

//
// #UMoNq4biWGe
let day: number = 10;

if (day >= 1 && day <= 10) {
  console.log(`Перша декада`);
} else if (day >= 11 && day <= 20) {
  console.log(`Друга декада`);
} else if (day >= 21 && day <= 31) {
  console.log(`Третя декада`);
} else {
  console.log(`Невірна дата`);
}

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfWeek: number = 5;

switch (dayOfWeek) {
  case 1:
    console.log("Monday: Заплановано зустріч з командою о 10:00");
    break;
  case 2:
    console.log("Tuesday: Робота над проектом та тренування о 18:00");
    break;
  case 3:
    console.log("Wednesday: Презентація результатів роботи о 15:00");
    break;
  case 4:
    console.log("Thursday: Відвідування конференції та навчання");
    break;
  case 5:
    console.log("Friday: Завершення тижневих задач та зустріч з друзями");
    break;
  case 6:
    console.log("Saturday: Вихідний день, відпочинок і хобі");
    break;
  case 7:
    console.log("Sunday: Підготовка до нового тижня, читання");
    break;
  default:
    console.log("Невірне значення. Введіть число від 1 до 7.");
    break;
}

//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let numA: number = 12;
let numB: number = 12;

console.log(numA > numB ? numA : numA < numB ? numB : `Числа рівні`);

//
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
let numX: string | number = NaN;
numX = numX || "default";
console.log(numX);

//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

interface Course {
  title: string;
  monthDuration: number;
}

let coursesAndDurationArray: Course[] = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

for (const element of coursesAndDurationArray) {
  if (element.monthDuration > 5) {
    console.log(`${element.title}: Супер`);
  }
}
