// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray)

// An array SHOULD be used with values of a single data type
const myArray2 = ["James", "Sam", "Xavier"];

// A) ARRAY PROPERTIES
console.log("Number of elements in mappedArray: " + myArray2.length)


// B) ARRAY METHODS

// i - map function of an array (e.g. Used for displaying a list of products dynamically)
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6];

//The arrow function below is used to shorten the return callback function 
const multiplyArrBy10 = mappedArray.map(item => item * 10)
// Below is the same but longer version of the above example
// const arr = mappedArray.map(function(item){return item * 10;})

// More examples below:
// How map function work with callback functions - written in 3 forms:

// Callback function #1 as an arrow function:
// const arrMultiplyBy10 = mappedArray.map(item => item * 10);

// Callback function #2 as an arrow function in its full form:
// const arr2 = mappedArray.map((item)=>{return item * 10;});

// Callback function #3 as a conventional function:
// const arr = mappedArray.map(function(item){ return item * 20; }); 

// Callback function #4, using a dedicated function within the arrow function:
// function mulitplyBy20(a){
//     return a * 20;
// }
// const arrMultiplyBy20 = mappedArray.map(item => mulitplyBy20(item));
// console.log(arrMultiplyBy20);

console.log(multiplyArrBy10);

// ii - filter function of an array (e.g. Used for filtering a list of products)
// Implement your code here
const vowels = ["a", "e", "i", "o", "u"];
const filteredVowels = vowels.filter(vowel => vowel == "a" || vowel =="u");
console.log(filteredVowels) // ["a", "u"]

// iii - sort function of an array
// Implement your code here
const nums = [1,2,3,4,5,6];
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by descending order
// Implement your code here
//the ? here is the ternary operater whereby if a > b then we return -1 when a is greater than b, and 1 otherwise.
// meaning -1 will perform the action while 1 will not perform the action
const descendingNums = nums.sort((a, b) => a > b ? -1 : 1);
console.log(descendingNums); //[6, 5, 4, 3, 2, 1]

//This is the longer form of the code above
const descendingNums2 = nums.sort((a,b)=>{
    if(a > b)
        return -1;
    else
        return 1;
})

console.log(descendingNums2);


// Sort by ascending order
// Implement your code here
const ascendingNames = names.sort((a,b) => a > b ? 1 : -1);
console.log(ascendingNames); // ["Chris", "James", "Lenon", "Max"]


//this is the longer form of the code above
const ascendingNames2 = names.sort((a, b)=>{
if(a > b)
            return 1;
        else
            return -1;
})

console.log(ascendingNames2);

// iv - reduce function of an array
// Implement your code here

//the reduce funtion will reduce all the elements in the array to a single value by applying a function
//below code will multipy the array by the next corresponding value inside of the array
// therefore it will multiply 1*2*3*4=24
const numbers = [1, 2, 3, 4];
const productOfNums = numbers.reduce((a,b) => a * b);
console.log(productOfNums) //24

// another approach of applying a reuduce function of an array
// Implement your code here
function product(a, b){
    return a * b;
}

const numbers2 = [1, 2, 3, 0];
const productOfNums2 = numbers2.reduce(product);
console.log(productOfNums2); //0

// v - manipulating data into an existing array
const teamList = ["Tanna", "Shia Lyn", "Zhi Yan", "Francis"];
// teamList [4] = "Muhaimin";

// instead of rely on indices like above. push can be used to replace it
teamList.push("Muhaimin");



console.log("Team 1: " + teamList);
console.log(teamList.indexOf("Muhaimin"));

// const extractedMembers = teamList.splice(0, 2); //remove a value starting from index and ends before index
// console.log(extractedMembers); //["Tanna", "Shia Lyn"]
// console.log(teamList); // ["Zhi Yan", "Francis", "Muhaimin"]

const newTeamList = [...teamList.splice(0, 2), "Colin", ...teamList];
console.log(newTeamList)

//reverses the position of the array
console.log(newTeamList.reverse());
// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here
let countdown = 0;

for (let index = 10; index >= countdown; index--) {
    index > countdown ? console.log(index) : console.log("The weekend is here.");
    
}


// ii - for-each loop (Use for each for when you dont need a condition to trigger the loop)
// Implement your code here
const tickerSymbols = ["FB", "AAPL", "AMZN", "NFLX", "GOOG"];
tickerSymbols.forEach(ticker => console.log(ticker));

const productListing = [{name: "Jordan 3", price: "$100"}, {name: "Nike Dunks", price: "$150"}];
productListing.forEach(item => console.log(item));



// iii - do-while loop (execute first, check for the condition later)
// Implement your code here
// let getName = "";

// do { //start executing
//     getName = prompt("Please enter your name:");
//         document.getElementById("displayName").textContent = getName;
// } while(getName == ""); //check later


// iv - while loop (check the conditions first before running the while loop)
// Implement your code heretest

let getName2 = ""

while(getName2 == ""){ //check first, before executing
    getName2 = prompt("Please Enter your name:");

    if(getName2 !== "")
        document.getElementById("displayName").textContent = getName2
}