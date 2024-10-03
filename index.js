// Destructuring

const users = ["Soraim", "Ayan", "Sowrab", "Shaki"];

// Without Destructuring
// console.log(users[0]);
// console.log(users[2]);

const [userOne, userTwo, userA] = users;

console.log(userA); // Sowrab

const newPerson = {
  name: "Ayan",
  age: 20,
  canDrive: true,
  country: "Sri Lanka",
};

// Without Destructuring
// let name = newPerson.country;
// console.log(newPerson.country, newPerson.name);

// const { age, name, canDrive, country } = newPerson;
// console.log(age);

function persona({ name, country }) {
  console.log(`My name is ${name} and i live in ${country}`);
}

// persona("Sayem", "India")
persona(newPerson);

// Spread Operator
const group1 = [1, 3, 4];
const group2 = [10, 11, 12, 14];

const combineGroup = group1.concat(group2);
console.log(combineGroup);

const newGroup = [...group1, ...group2];
console.log(newGroup);

function sum(x, y, z) {
  console.log(x + y + z);
}

sum(...group2);
