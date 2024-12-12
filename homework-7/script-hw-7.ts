// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

interface UserProfile {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
}

let userProfile: UserProfile[] = [];

userProfile.push(
  userOne(1, "Alice", "Smith", "alice.smith@example.com", "555-123-4567"),
  new User(2, "Bob", "Johnson", "bob.johnson@example.com", "555-234-5678"),
  new User(
    3,
    "Charlie",
    "Williams",
    "charlie.williams@example.com",
    "555-345-6789",
  ),
  new User(4, "David", "Brown", "david.brown@example.com", "555-456-7890"),
  new User(5, "Eva", "Jones", "eva.jones@example.com", "555-567-8901"),
  new User(6, "Frank", "Miller", "frank.miller@example.com", "555-678-9012"),
  new User(7, "Grace", "Davis", "grace.davis@example.com", "555-789-0123"),
  new User(8, "Henry", "Garcia", "henry.garcia@example.com", "555-890-1234"),
  new User(9, "Ivy", "Martinez", "ivy.martinez@example.com", "555-901-2345"),
  new User(
    10,
    "Jack",
    "Rodriguez",
    "jack.rodriguez@example.com",
    "555-012-3456",
  ),
);

console.log("Масив users", users);

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filter = users.filter((value) => value.id % 2 === 0);
console.log("Об'єкти з парними id", filter);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sort = users.sort((a, b) => a.id - b.id);
console.log("Об'єкти по id. по зростанню", sort);

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
  constructor(id, name, surname, email, phone, order = []) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}

let clients = [];

clients.push(
  new Client(
    11,
    "Sarah",
    "Wilson",
    "sarah.wilson@example.com",
    "555-222-3333",
    ["Desk"],
  ),
  new Client(12, "John", "Taylor", "john.taylor@example.com", "555-333-4444", [
    "Laptop",
    "Mouse",
  ]),
  new Client(13, "Emma", "Davis", "emma.davis@example.com", "555-444-5555", [
    "Phone",
  ]),
  new Client(
    14,
    "Michael",
    "Miller",
    "michael.miller@example.com",
    "555-555-6666",
    ["Tablet", "Keyboard"],
  ),
  new Client(
    15,
    "Olivia",
    "Martinez",
    "olivia.martinez@example.com",
    "555-666-7777",
    ["Monitor"],
  ),
  new Client(
    16,
    "Daniel",
    "Brown",
    "daniel.brown@example.com",
    "555-777-8888",
    ["Speaker", "Charger"],
  ),
  new Client(
    17,
    "Sophia",
    "Garcia",
    "sophia.garcia@example.com",
    "555-888-9999",
    ["Printer", "Headphones"],
  ),
  new Client(
    18,
    "James",
    "Rodriguez",
    "james.rodriguez@example.com",
    "555-999-0000",
    ["Headphones", "Laptop", "Charger"],
  ),
  new Client(
    19,
    "Ava",
    "Hernandez",
    "ava.hernandez@example.com",
    "555-111-2222",
    ["Keyboard", "Desk"],
  ),
  new Client(20, "Liam", "Lopez", "liam.lopez@example.com", "555-222-3334", [
    "Charger",
    "Monitor",
    "Mouse",
  ]),
);

console.log("Масив clients", clients);

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(clients[0].order.length);
const sort1 = clients.sort((a, b) => a.order.length - b.order.length);
console.log("Відсортовано по кількості товарів", sort1);

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineVolume = engineVolume;

  this.drive = function () {
    return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
  };

  this.info = function () {
    return `Модель - ${this.model}, Виробник - ${this.manufacturer}, Рік випуску - ${this.year}, Максимальна швидкість - ${this.maxSpeed}, Об'єм двигуна - ${this.engineVolume}`;
  };

  this.increaseMaxSpeed = function (newSpeed) {
    return (this.maxSpeed += newSpeed);
  };
  this.changeYear = function (newValue) {
    return (this.year = newValue);
  };
  this.addDriver = function (driver) {
    this.driver = driver;
  };
}

let carTesla = new Car("Tesla Model S", "Tesla", 2020, 250, 2.0);
console.log(`drive(): ${carTesla.drive()}`);
console.log(`info(): ${carTesla.info()}`);
console.log(`increaseMaxSpeed (newSpeed): ${carTesla.increaseMaxSpeed(20)}`);
console.log(`changeYear (newValue): ${carTesla.changeYear(2024)}`);
carTesla.addDriver({ name: "Іван", age: 30, experience: 5 });
console.log("Driver info:", carTesla.driver);

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
  constructor(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
  }

  drive() {
    return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
  }

  info() {
    return `Модель - ${this.model}, Виробник - ${this.manufacturer}, Рік випуску - ${this.year}, Максимальна швидкість - ${this.maxSpeed}, Об'єм двигуна - ${this.engineVolume}`;
  }

  increaseMaxSpeed(newSpeed) {
    return (this.maxSpeed += newSpeed);
  }

  changeYear(newValue) {
    return (this.year = newValue);
  }

  addDriver(driver) {
    this.driver = driver;
  }
}

console.log(`************** (Те саме, тільки через клас) ********************`);

let carSkoda = new Car2("Fabia", "Skoda", 2003, 160, 1.2);

console.log(`drive(): ${carSkoda.drive()}`);
console.log(`info(): ${carSkoda.info()}`);
console.log(`increaseMaxSpeed (newSpeed): ${carSkoda.increaseMaxSpeed(20)}`);
console.log(`changeYear (newValue): ${carSkoda.changeYear(2008)}`);
carSkoda.addDriver({ name: "Олександр", age: 40, experience: 20 });
console.log("Driver info:", carSkoda.driver);

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
  constructor(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
  }
}

class Prince {
  constructor(name, age, foundShoeSize) {
    this.name = name;
    this.age = age;
    this.foundShoeSize = foundShoeSize;
  }
}

const cinderellas = [
  new Cinderella("Анна", 20, 36),
  new Cinderella("Марія", 22, 37),
  new Cinderella("Ольга", 19, 35.5),
  new Cinderella("Ірина", 21, 38),
  new Cinderella("Катерина", 23, 36.5),
  new Cinderella("Вікторія", 20, 37.5),
  new Cinderella("Наталія", 18, 35),
  new Cinderella("Тетяна", 25, 38.5),
  new Cinderella("Юлія", 24, 39),
  new Cinderella("Оксана", 22, 37),
];

const prince = new Prince("Олександр", 25, 39);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
cinderellas.forEach((cinderella) => {
  if (cinderella.shoeSize === prince.foundShoeSize) {
    console.log("forEach:", cinderella);
  }
});

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let luckyCinderella = cinderellas.find(
  (cinderella) => cinderella.shoeSize === prince.foundShoeSize,
);
console.log("find():", luckyCinderella);
