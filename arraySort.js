// sort method sort by alphabetical order

const arr = ["Bannaba", "Orange", "Apple", "Mango"];
const arrSort = arr.sort()
// console.log(arrSort.reverse());


// sort a number of array


const point  = [90, 230, 130, 540, 650, 960 ,40]
point.sort((a, b) =>{
    return b - a;
});
// console.log(point);

// sort the objects
const car =[
    {type: "Volvo", year:2016},
    {type: "Subaru", year:2001},
    {type: "BMW" , year:2010}
]

const scars = car.sort((a, b) =>{
    return a.year - b.year
})

// console.log(scars);