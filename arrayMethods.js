// array Methods

// converting array to string

const fruits = ["Bannaba", "Orange", "Apple", "Mango"];
const stringFruits = fruits.toString()
// console.log(stringFruits);

// Popping and Pushing Methods

// pop removes an element from the last

const popFruits = fruits.pop();
// console.log(popFruits);
// console.log(stringFruits);

const pushFruits = fruits.push("Pinapple");
// console.log(fruits);

const sFruits = fruits.shift()
// console.log(fruits);

const unFruits = fruits.unshift("Benji");
// console.log(fruits);

// console.log(delete fruits[0])
// console.log(fruits);

// // splice method 
// console.log(fruits);
const spliceFruits = fruits.splice(0, 0, "Pin")
// console.log(fruits);
fruits.splice(1, 1);
// console.log(fruits);


const fruits1 = ["Pinapple", "Banana"];
const fruits2 = ["jackfruit", "Mango"];

const fullFruits = fruits1.concat(fruits2);
// console.log(fullFruits);

const lastFruits = fullFruits.concat("Appleapple");
// console.log(lastFruits);

// slice method
// slice method create a new array...
 const sliceFruits = lastFruits.slice(3)
//  console.log(sliceFruits);
//  console.log(lastFruits);

 // Autometic toString
 document.getElementById("p").innerHTML = fruits;