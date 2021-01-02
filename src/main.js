// Variable containing my age.
const myAge = 28;
// Variable that will change.
let earlyYears = 2;
earlyYears *= 10.5;
// Later Years variable
let laterYears = myAge - 2;
// Calculates number of dog years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Age in dog years.
let myAgeInDogYears = earlyYears + laterYears;

let myName = "Hamza".toLowerCase();
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
