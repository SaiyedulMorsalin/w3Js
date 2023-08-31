// array.forEach()

const numbers = [45, 4, 9, 10, 14, 16]

// function myFunction(value, index, array) {
//     // forEach
//     // console.log(array);
//     // console.log(index);
//     // console.log(value);

//     console.log("--------------------");
// }
function myFunction(value, index, array) {
    return value > 10;

}
// array.forEach
// const newNumber = numbers.forEach(myFunction)
// array.map
// const newNumber = numbers.map(myFunction)

// array.filter
// const newNumber = numbers.filter(myFunction)

function myReduce(total, value, index, array) {
    return total + value;
}

// const newNumber = numbers.reduce(myReduce)
function myEvery(value, index, array) {
    return value > 18;
}

// array.find 


const newNumber = numbers.findIndex(myEvery)
console.log(newNumber);
console.log(numbers);
console.log(Array.from("ABCDEFGH"));

