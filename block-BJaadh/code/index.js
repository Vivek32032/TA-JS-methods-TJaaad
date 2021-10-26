// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.indexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
let sentance = strings.join(" ")
// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
sentance = strings.join(" ")
// - Remove the first word in the array (strings)
let shiftedStrings = [...strings].shift()
// - Find all the words that contain 'is' use string method 'includes'
for (let word of strings) {
  if (word.includes("is")) {
    console.log(word);
  }
}
// - Find all the words that contain 'is' use string method 'indexOf'
for (let word of strings) {
  if (word.indexOf("is") !== -1) {
    console.log(word);
  }
}
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(element => element % 3 === 0)
// -  Sort Array from smallest to largest
let smallToLarge = [...numbers].sort((a, b) => a - b);
// - Remove the last word in strings
let removedString = [...strings].pop();
// - Find largest number in numbers
console.log(smallToLarge[smallToLarge.length - 1]);

// - Find longest string in strings
let longestString = strings.sort((a, b) => a.length - b.length)[strings.sort((a, b) => a.length - b.length).length - 1]

// - Find all the even numbers
let evenNumber = numbers.filter(value => value % 2 === 0);
// - Find all the odd numbers
let oddNumber = numbers.filter(value => value % 2 !== 0);

// - Place a new word at the start of the array use (unshift)
strings.unshift("Let");
// - Make a subset of numbers array [18,9,7,11]
let newNumbers =[...numbers]
let numbersSubset = newNumbers.splice(3,4,[18,9,7,11])
// - Make a subset of strings array ['a','collection']
let newString = [...strings]
let stringsSubset = newString.splice(2,2,['a','collection'])
// - Replace 12 & 18 with 1221 and 1881
numbers.map(value => {
  if (value === 12) {
    return 1221
  }
  if (value === 18) {
    return 1881
  } return value;
})

// - Replace words in strings array with the length of the word
let lengthOfStrings = strings.map(value => value.length)
// - Find the sum of the length of words using above question
let sumOfStrignLength = lengthOfStrings.reduce((a, b) => a + b, 0)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let found = customers.filter(element => element.firstname.startsWith("J"))
// - Create new array with only first name
let customersFirstName = customers.map(values => values.firstname)
// - Create new array with all the full names (ex: "Joe Blogs")
let customersFullName = customers.map(values => values.firstname + " " + values.lastname)

// - Sort the array created above alphabetically
let sortedNames = customersFullName.sort()
// - Create a new array that contains only user who has at least one vowel in the firstname.
let userFirstNameVowel = customers.filter(element => {
  if (element.firstname.includes("a")) {
    return element;
  }
  if (element.firstname.includes("e")) {
    return element;
  }
  if (element.firstname.includes("i")) {
    return element;
  }
  if (element.firstname.includes("o")) {
    return element;
  }
  if (element.firstname.includes("u")) {
    return element;
  }
})