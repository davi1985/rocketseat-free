// classes
/*
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}
/*
class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push("New task");
    console.log(this.todos);
  }
}

// usando herança
class TodoList extends List {
  constructor() {
    super();

    this.user = "Davi";
  }

  showUser() {
    console.log(this.user);
  }
}

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  carInfo() {
    console.log("Modelo: " + this.model + ", ano: " + this.year);
  }
}

//static method
class Matematica {
  static sum(x, y) {
    return x + y;
  }
}

//=======================///
let Mytasks = new TodoList();

document.getElementById("novotodo").onclick = function() {
  Mytasks.add("New Task");
};

Mytasks.showUser();

let MyCar = new Car("Fiat Uno", 2013);
MyCar.carInfo();

console.log(Matematica.sum(2, 3));


//const e let
const user = { name: "Davi" };
user.name = "Silva";
console.log(user);

function test(x) {
  let y = 2;
  if (x > 5) {
    console.log(x, y);
  }
}
test(10, 5);

//operaçoes com array
const myArray = [1, 2, 5, 4, 8];
console.log(myArray);

//map
const newArray = myArray.map(function(item, index) {
  return item + index;
});
console.log(newArray);

//reduce
const sum = myArray.reduce(function(total, next) {
  return total + next;
});
console.log(sum);

//filter
const filter = myArray.filter(function(item) {
  return item % 2 === 0;
});
console.log(filter);

//find
const find = myArray.find(function(item) {
  return item === 50;
});
console.log(find);


// arrow functions

const myArray = [1, 2, 5, 4, 8];

const map = myArray.map(item => item * 2);
console.log(map);

const test = () => {
  return "teste";
};
console.log(test());

const test2 = () => [1, 2, 3];
console.log(test2());

const test3 = () => ({ name: "Davi" });
console.log(test3());


// valores padrao

function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum(1));
console.log(sum());

const sum2 = (a = 0, b = 0) => a + b;
console.log(sum());


// desestruturação de objetos
const user = {
  name: "Davi",
  age: 34,
  address: {
    city: "Icapuí",
    state: "CE"
  }
};
console.log(user);

// const name = user.name;
// const age = user.age;
// const city = user.address.city;
// console.log(name);
// console.log(age);
// console.log(city);

const {
  name,
  age,
  address: { city }
} = user;

console.log(name);
console.log(age);
console.log(city);

function showUser({ name, age }) {
  console.log(name, age);
}
showUser(user);

// operadores rest e spread
// REST
const user = {
  name: "Davi",
  age: 34,
  empresa: "DsWeb"
};

const { name, ...resto } = user;

console.log(name);
console.log(resto);

const arr = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

function sum(...params) {
  return params;
}
console.log(sum(1, 3));

//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user2 = { ...user, name: "Sarah" };
console.log(user2);


// template literals

const name = "Davi";
const age = 34;

console.log(`Meu nome é ${name} e tenho ${age} anos`);


// object short syntax

const wife = {
  name: "Joelma",
  wife_age: 29,
  empresa: "CasaMar"
};

console.log(wife);
*/
