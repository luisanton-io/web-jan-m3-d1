// Variables and assignments

// What is the scope of a variable?
// The block of code where the variable is accessible 


// BLOCK SCOPED const, let

function myFunction() {

    let myNumber = 5 // or const
    if (true) {
        let myNumber = 7 // or const
    }

    console.log(myNumber)  // 5
}

myFunction()

// FUNCTION SCOPED var
function myFunction() {

    var myNumber = 5
    if (true) {
        var myNumber = 7
    }

    console.log(myNumber)  // 7
}

myFunction()

// PRIMITIVES vs NON-PRIMITIVES

// Primitive values are numbers, strings, booleans, null, undefined

// Non-primitive values are everything else like: objects, arrays, functions

// VARIABLE ASSIGNMENTS

// Primitive values are assigned BY VALUE. 
// Therefore if the source changes, the destination doesn't change, because its value was copied.
let myNumber = 5

let anotherNumber = myNumber

myNumber = 876

console.log({ anotherNumber })

// NON-PRIMITIVE values are assigned BY REFERENCE. 
// Therefore if the source changes, the destination changes too.

const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    color: "black"
    // key: ??????
}

const myCar = car // "myCar" is not A COPY of "car": it's the same car!

// const newCar = Object.assign({}, car) // instead creates a COPY of "car", therefore from now on there will be 2 cars...


const property = "color"
car[property] = "yellow"
//SAME THING AS:
// car.color = "yellow"

// console.log({ myCar })

// console.log(car.color)

console.log(Object.keys(car))
console.log(Object.values(car))

// console.log(Object.entries(car))

for (let i = 0; i < Object.keys(car).length; i++) {

    const key = Object.keys(car)[i]

    console.log("KEY: ", key)
    console.log("VALUES: ", car[key])
}

// ARRAYS
// Arrays are a particular kind of object

const fruits = ["apple", "banana", "orange"]

const otherFruits = fruits

fruits[0] = "strawberry"

// console.log(otherFruits)

// ARRAY METHODS

// MUTATING array methods // it means that the original array is modified

// fruits.push("pineapple")

// console.log(fruits)

// console.log("here: ", fruits.shift())
// console.log(fruits)

// console.log("here: ", fruits.pop())
// console.log(fruits)

// NON MUTATING array methods // the original array is untouched

// console.log(fruits.slice(-2))
// console.log(fruits)

// console.log(fruits.includes("peach"))
// console.log("do we have banana?", fruits.indexOf("banana") === -1)

// TRUTHY and FALS(E)Y values

// Falsey values are:
// 0, false, null, undefined, NaN, ""

// Casting falsey values to BOOLEAN returns FALSE.
// (everything else returns TRUE)

// console.log(Boolean([]))


console.log("=== DECISION MAKING STATEMENTS ===")
// DECISION-MAKING STATEMENTS
function goToClub() {
    const age = 67

    // if (age > 21) {
    //     console.log("You can get in")
    // } else {
    //     console.log("You can not get in")
    // }

    switch (true) {
        case age < 21:
            console.log("You can not get in")
            break
        case age === 21:
            console.log("whatever")
            break
        case age > 21 && age <= 29:
            console.log("ok You can get in")
            break
        case age > 29:
            console.log("Too old man")
            break
        default:
            console.log("error")
    }
}

// goToClub()

// LOOPS

// let i = 10
// while (i < 10) {
//     console.log(i++)
//     // i = i + 1
//     // i += 1
//     // i++
//     // ++i
// }
// i = 0

// do {
//     console.log(i)
//     i++
// } while (i < 10)

// console.log(i)

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i]
//     console.log(fruit)
// }

// for (const key in car) { // looping through the keys of car
//     console.log(key)
// }

// for (const fruit of fruits) { // looping through the values of fruits
//     console.log(fruit)
// }

fruits.forEach(fruit => {
    console.log(fruit)
})


console.log("=== FUNCTIONS ===")
// FUNCTIONS
// Functions are blocks of instructions that can be executed by the engine

// Function definition
function makePizza() {
    // console.log("Making pizza")
    // console.log("Pressing the dough...")
    // console.log("Adding tomatoes and toppings...")
    // console.log("Bake for 20 minutes at 350 degrees")
    // console.log("Cutting the pizza into slices...")

    return "🍕"
}

// Function execution/invocation/calling
makePizza()

// FRUITFUL functions return a value after the execution

const pizza = makePizza()
console.log(pizza)

function multiply(a, b) { // a and b are parameters
    return a * b
}

const result = multiply(5, 6) // 5 and 6 are arguments
console.log(result)

// VOID functions don't return any value after the execution

function greetSomeone(name) {
    console.log("Hello,", name)
    // no result... no return, returns undefined
}

// const _result = greetSomeone("John")
// console.log(_result)

function greet() {
    console.log("Hello world!")
}

// CALLBACKS
// A callback function is a function that gets passed as an argument to another function

function doSomethingAndCallback(callback) { // callback = anonymous function
    console.log("does something useless")

    console.log("waiting for 5 seconds with no point")
    setTimeout(() => {
        callback() // greet()
    }, 5000)
}

doSomethingAndCallback(function () {
    greetSomeone("John")
})
// console.log(greet)
