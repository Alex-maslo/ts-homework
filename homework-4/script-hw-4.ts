// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleArea(width: number, height: number): number {
  return width * height;
}

console.log(rectangleArea(20, 60));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(radius: number): number {
  return Math.PI * radius ** 2;
}

console.log(circleArea(30));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(r: number, h: number): number {
  return 2 * Math.PI * r * h;
}

console.log(cylinderArea(20, 10));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function printArrayElements(array: any[]): void {
  for (const arrayElement of array) {
    console.log(arrayElement);
  }
}

printArrayElements([1, 2, 3]);
printArrayElements(["a", "b", "c"]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function createParagraph(text: string): void {
  document.write(`<p>${text}</p>`);
}

createParagraph("Hello");

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

function renderList(text: string): void {
  document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}

renderList("List element");

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li.
//     Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл) та виводить його через document.write

function createListWithItems(text: string, li: number): void {
  document.write(`<ul>`);
  for (let i: number = 0; i < li; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
}

createListWithItems("item", 6);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

function createListFromArray(arrayList: any[]) {
  document.write(`<ul>`);
  for (const arrayListElement of arrayList) {
    document.write(`<li>${arrayListElement}</li>`);
  }
  document.write(`</ul>`);
}

createListFromArray([1, "hello", true, "world", 42]);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

interface BasicUser {
  id: number;
  name: string;
  age: number;
}

function displayUserInfo(objectArray: BasicUser[]): void {
  for (const objectArrayElement of objectArray) {
    document.write(`<div>${objectArrayElement.id}</div>`);
    document.write(`<div>${objectArrayElement.name}</div>`);
    document.write(`<div>${objectArrayElement.age}</div>`);
  }
}

const basicUsers: BasicUser[] = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Doe", age: 22 },
];

displayUserInfo(basicUsers);

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function findMin(array: number[]): number {
  let minNumber: number = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
}

console.log(findMin([5, 3, 8, 1, 9]));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення
// елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr: number[]): number {
  let result = 0;
  for (const arrElement of arr) {
    result += arrElement;
  }
  return result;
}

console.log(sum([5, 3, 8, 1, 9]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах

function swap(arr: number[], index1: number, index2: number): number[] {
  let a = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = a;

  return arr;
}

console.log(swap([5, 3, 8, 1, 9], 3, 0));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(
  sumUAH: number,
  currencyValues: { currency: string; value: number }[],
  exchangeCurrency: string,
): number | string {
  for (const element of currencyValues) {
    if (element.currency === exchangeCurrency) {
      return sumUAH / element.value;
    }
  }
  return `Немає валюти у списку`;
}

console.log(
  exchange(
    10000,
    [
      { currency: "USD", value: 25 },
      { currency: "EUR", value: 42 },
    ],
    "USD",
  ),
);
