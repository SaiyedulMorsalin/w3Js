// String Search Methods
/*  1. Stting indexOf()
    2. String lastIndxOf()
    3. String search()
    4. String matcha()
    5. Sting matchAll()
    6. String includes()
    9. String startsWith()
    10. String endsWith()
*/

// JavaScript String Methods()......

let text = "please locates locates where 'locate' occurs!";
let index = text.lastIndexOf("locates"); // return 7
//console.log(index);

let txt = "Please locate where 'locate' occurs!";
let search = txt.search("locate") // allow regular expression.
//console.log(search);

let mtxt = "The rain in SPAIN stays mainly in the plain";
let match = mtxt.match(/ain/g);
//console.log(match);

let itext = "Hello world , welcome to her universe!";
let innc = itext.includes("world")
// console.log(innc);

let stext = "Hello world , welcome to her universe!";
let sw = stext.startsWith(" ",5)
// console.log(sw);

let entext = "John Doe";
let seEnd = entext.endsWith(" Doe ");
// console.log(seEnd);