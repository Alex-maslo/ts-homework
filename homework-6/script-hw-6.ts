// #dFeorS3m7u
// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let stringArray: string[] = [
  "hello world",
  "lorem ipsum",
  "javascript is cool",
];
stringArray.forEach((str: string): void => console.log(str.length));

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

stringArray.forEach((str: string): void => console.log(str.toUpperCase()));

// #ClDsAm7xba7
// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let uppercaseArray: string[] = [
  "HELLO WORLD",
  "LOREM IPSUM",
  "JAVASCRIPT IS COOL",
];
uppercaseArray.forEach((str: string) => console.log(str.toLowerCase()));

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString: string = " dirty string   ";
console.log(dirtyString.trim());

//     #bfoJuse4ZzP
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str: string = "Ревуть воли як ясла повні";

const stringToArray = (string: string) => string.split(" ");
console.log(stringToArray(str));

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numberArray: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let valueToString: string[] = numberArray.map((value: number): string =>
  value.toString(),
);
console.log(valueToString);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums: number[] = [11, 21, 3];

function sortNums(array: number[], direction: string): number[] | undefined {
  if (direction === "ascending") {
    return array.sort((a, b) => a - b);
  }
  if (direction === "descending") {
    return array.sort((a, b) => b - a);
  }
}

console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));

// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

interface Course {
  id?: number;
  title: string;
  monthDuration: number;
}

const coursesAndDurationArrayTs: Course[] = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

let sort: Course[] = coursesAndDurationArrayTs.sort(
  (a: Course, b: Course): number => b.monthDuration - a.monthDuration,
);
console.log(sort);

let filter: Course[] = coursesAndDurationArrayTs.filter(
  (value: Course): boolean => value.monthDuration > 5,
);
console.log(filter);

const mappedArray: Course[] = filter.map(
  (value: Course, index: number): Course => ({
    id: index + 1,
    title: value.title,
    monthDuration: value.monthDuration,
  }),
);
console.log(mappedArray);

// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//

const cardSuit: string[] = ["spade", "diamond", "heart", "clubs"];
const cardValue: string[] = [
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
  "ace",
];

interface Card {
  cardSuit: string;
  value: string;
  color: string;
}

let deck: Card[] = [];
for (const suit of cardSuit) {
  for (const value of cardValue) {
    suit === "diamond" || suit === "heart"
      ? deck.push({ cardSuit: suit, value: value, color: "red" })
      : deck.push({ cardSuit: suit, value: value, color: "black" });
  }
}

// - знайти піковий туз
const spadeAce: Card | undefined = deck.find(
  (card: Card): boolean => card.value === "ace" && card.cardSuit === "spade",
);
spadeAce
  ? console.log("піковий туз", spadeAce)
  : console.log("Піковий туз не знайдений");

// - всі шістки
const allSixes: Card[] = deck.filter((card: Card) => card.value === "6");
console.log("всі шістки", allSixes);

// - всі червоні карти
const redCards: Card[] = deck.filter((card: Card) => card.color === "red");
console.log("всі червоні карти", redCards);

// - всі буби
const allDiamonds: Card[] = deck.filter(
  (card: Card) => card.cardSuit === "diamond",
);
console.log("всі буби", allDiamonds);

// - всі трефи від 9 та більше
// Варіант 1
const clubsNineAndAbove: Card[] = deck.filter(
  (card) =>
    card.cardSuit === "clubs" &&
    card.value !== "6" &&
    card.value !== "7" &&
    card.value !== "8",
);
console.log("всі трефи від 9 та більше - варіант 1", clubsNineAndAbove);

// Варіант 2
const exceptions: string[] = ["6", "7", "8"];
const clubsNineAndAboveSecond: Card[] = deck.filter(
  (card) => card.cardSuit === "clubs" && !exceptions.includes(card.value),
);
console.log("всі трефи від 9 та більше - варіант 2", clubsNineAndAboveSecond);

// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

interface Suits {
  spades: Card[];
  diamonds: Card[];
  hearts: Card[];
  clubs: Card[];
}

const result: Suits = deck.reduce(
  (acc: Suits, card: Card) => {
    switch (card.cardSuit) {
      case "spade":
        acc.spades.push(card);
        break;
      case "diamond":
        acc.diamonds.push(card);
        break;
      case "heart":
        acc.hearts.push(card);
        break;
      case "clubs":
        acc.clubs.push(card);
        break;
    }

    return acc;
  },
  {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
  },
);

console.log(result);

// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

interface Course2 {
  title: string; // Назва курсу
  monthDuration: number; // Тривалість курсу в місяцях
  hourDuration: number; // Тривалість курсу в годинах
  modules: string[]; // Масив модулів, що включаються в курс
}

let coursesArray: Course2[] = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced",
    ],
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];

console.log(`*************************`);
let findSass = coursesArray.filter((item) => item.modules.includes("sass"));
console.log(findSass);

let findDocker = coursesArray.filter((item) => item.modules.includes("docker"));
console.log(findDocker);
