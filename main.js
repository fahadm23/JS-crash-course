// var, let, const
// var is globally scoped, if you use it twice it can cause complications
// let and const have block scope
// let allows you to reassign values
// const can't be reassigned


// Strings, Numbers, Boolean, null, undefined, Symbol

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// Concatenation
('My name is ' + name + ' and I am ' + age);
(`My name is ${name} and I am ${age}`)

const s = 'Hello World';

(s.substring(0, 5).toUpperCase()); // Get part of a string and uppercase it
(s.split('')) // Split string

const a = 'technology, computers, it, code';
(a.split(', ')) // split whole words into array

// Arrays
const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes' // You can add to a const array

fruits.push('mangos') // Push method pushes something to the end of the array (adds)
fruits.unshift('strawberries') // unshift adds something to the start of the array
fruits.pop(); // Removes last item in array
(Array.isArray(fruits)); // check if something is an array
(fruits.indexOf('oranges')); // check the index of a value in an array
(fruits);

// Object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

//Destructuring
const { firstName, lastName, address: { city } } = person;
// console.log(city);
person.email = 'john@gmail.com'; // add another object value

//Objects in an array
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
];

//console.log// 
(todos[1].text); // Get text from id:2

// How to convert to JSON when sending to server
const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

// For loop
for(let i = 0; i <= 10; i++) {
 //   console.log(`For Loop Number: ${i}`);

}

// While loop
let i = 0;
while(i < 10) {
    //console.log(`While Loop Number: ${i}`);
    i++;
};

for(let i = 0; i < todos.length; i++) {
    //console.log(todos[i].text);

}

for(let todo of todos) {
   // console.log(todo);
}

//forEach, map, filter
todos.forEach(function(todo) {
   // console.log(todo.text);
});

// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// //console.log(todoText);

// const todoText2 = todos.filter(function(todoo) {
//    // return todoo.isCompleted === true;
// });
// console.log(todoText2).map(function(todo) {
//     return todo.text;
// });


// Ternary Operator
// ? means then : means else
const c = 10;

const color = c > 10 ? 'red' : 'blue'
//console.log(color);

//Switch Statement
const d = 11;

const colors = d > 12 ? 'red' : 'blue';

switch(colors) {
    case 'red':
        console.log('color is red');
        break;
        default:
            //console.log('color is not red or blue');
            break;
}


//Functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

//console.log(addNums(5, 5));

// OOP Constructor function
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // Using date object
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
     this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`; //template literal ${}
     }
}

//Prototypes
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Jane', '1-4-1990');
//console.log(person1.getFullName());



//  ES6 2015 Classes
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person1.getFullName);

// DOM
document.getElementById
document.querySelector // selects one element by class, label, etc. even if more than one exist
document.querySelectorAll // selects all by the same name
document.getElementsByClassName // selects from only classes
document.getElementsByTagName // selects from tag names (li)


// Events
addEventListener('click', (e) =>  {
    e.preventDefault();
})
// Use event listeners to dynamically change webpage with inputs (clicks, hovers, etc.)
// (e) means takes event parameter e.g. function onSubmit(e) {}
// If there is a defaul action use e.preventDefault() to override
