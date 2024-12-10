// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i: number = 1; i <= 10; i++) {
  document.write(`<div>Це довільний текст</div>`);
}
// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i: number = 1; i <= 10; i++) {
  document.write(`<div>Це довільний текст для блоку№ ${i} </div>`);
}
// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i: number = 0;
while (i <= 20) {
  document.write(`<h1>Чудовий день</h1>`);
  i++;
}

//     #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j: number = 0;
while (j <= 20) {
  document.write(`<h1>Чудовий день #${j}</h1>`);
  j++;
}

//     #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
// <!--
//     і тд інші об'єкти масиву
//      ...
//      ...
//      ...
// -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems: string[] = [
  "html",
  "css",
  "javascript",
  "mysql",
  "mongodb",
  "react",
  "angular",
  "node.js",
];

document.write(`<ul>`);

for (const item of listOfItems) {
  document.write(`<li>${item}</li>`);
}

document.write(`</ul>`);

//
// -----------------------------------------------
//     #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
// <h3 class="product-title">TITLE. Price - PRICE</h3>
//     <img src="IMAGE" alt="" class="product-image">
//     </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//

interface Product {
  title: string;
  price: number;
  image: string;
}

let products: Product[] = [
  {
    title: "milk",
    price: 22,
    image:
      "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg",
  },
  {
    title: "juice",
    price: 27,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg",
  },
  {
    title: "tomato",
    price: 47,
    image:
      "https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74",
  },
  {
    title: "tea",
    price: 15,
    image:
      "https://www.barrysteashop.ie/cdn/shop/products/NEWOriginal40s_2400x.jpg?v=1601390013",
  },
];

for (const product of products) {
  document.write(
    `<div class="product-card">
                        <h3 class="product-title">${product["title"]}. Price - ${product["price"]}</h3>
                        <img src="${product["image"]}" alt="" class="product-image">
                    </div>`,
  );
}
//
//
// --------------------
// #4WrHwFTEop0
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

interface UserTwo {
  name: string;
  age: number;
  status: boolean;
}

let usersArray: UserTwo[] = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];

document.write(`<div>`);
document.write(`<h3>користувачі зі статусом true</h3>`);
document.write(`<ul>`);
for (const user of usersArray) {
  if (user.status) {
    document.write(`<li>${user.name} - ${user.status}</li>`);
    console.log(user);
  }
}
document.write(`</ul>`);
document.write(`</div>`);

document.write(`<div>`);
document.write(`<h3>користувачі зі статусом false</h3>`);
document.write(`<ul>`);

for (const user of usersArray) {
  if (!user["status"]) {
    document.write(`<li>${user.name} - ${user.status}</li>`);
    console.log(user);
  }
}
document.write(`</ul>`);
document.write(`</div>`);

document.write(`<div>`);
document.write(`<h3>користувачі, які старші за 30 років</h3>`);
document.write(`<ul>`);
for (const user of usersArray) {
  if (user["age"] > 30) {
    document.write(`<li>${user.name} - ${user.age}</li>`);
    console.log(user);
  }
}
document.write(`</ul>`);
document.write(`</div>`);
