// ludu khelay amra kivabe 1-6 number randomly print it.
// console.log(Math.random());


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//   console.log(getRandomNumber(1,6));


  // Are Students name asign to alphabetic order.


  const students = ["Summit", "Samiul", "Fuad", "Mintu", "Humayun"];
//   console.log(students.sort());


  // How many students roll Number asign to numerical order

  const studentRollNumber = [21,  100, 22, 66, 40, 50, 60, 70, 90];
//   console.log(studentRollNumber.sort((a, b) =>{
    // return a-b;
//   }));


  // Which year is leap year

  function isLeapYear(year){
    if((year % 400 === 0) || (year % 4 ===0) && (year % 100 !== 0)){
        // console.log(`${year} is leap year`);
    }
    else{
        // console.log(`${year} is not leap year`);
    }

  }
  isLeapYear(2023)


  const vowels = ["a", "e", "i", "o" , "u", "A", "E", "I", "O", "U"];
  
  function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence)
    letters.forEach((value)=>{
        if(vowels.includes(value)){
            count ++;
        }
    })
    return count;
  }

// console.log(countVowels("I love Bangladesh"));


// kno array theke duplicate ber kra

const numberss = [1, 2, 4, 6, 8, 9, 4, 1];

const duplicates = numberss.filter((value, index, array)=>{
    return array.indexOf(value) === index 

})
// console.log(duplicates);