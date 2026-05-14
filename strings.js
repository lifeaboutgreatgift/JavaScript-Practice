// ── STRINGS IN JAVASCRIPT ─────────────────
// String = text data
// Anything inside quotes is a string!
 
// ── 1. CREATING STRINGS ───────────────────
let single = 'Hello Lexy!'       // single quotes
let double = "Hello Grett!"     //double quotes
let backtick = `Hello Alex!`    //template literal

// all three are same! but backtick is most powerful!

// ── 2. TEMPLATE LITERALS ──────────────────
// backtick strings can have variables inside!
// same as f-strings in Python!

let name = "Aditi"
let age = 20
let country = "India"

// old way (ugly!)
console.log("Hello " + name + " you are " + age)

// new way (clean and beautiful!)
console.log(`Hello ${name} you are ${age} years old. And you are from ${country}!`)
//Hello Aditi you are 20 years old. And you are from India!

// can do math inside too!
console.log(`Next year you'll be ${age + 1}`) //21

// ── 3. STRING LENGTH ──────────────────────
let myName = "Aditi"
console.log(myName.length) //5
// counts every character including spaces!

let sentence = "I love coding"
console.log(sentence.length) // 13

// ── 4. CHANGING CASE ──────────────────────
let city = "Jaipur"
console.log(city.toUpperCase()) //JAIPUR
console.log(city.toLowerCase()) //jaipur

let shout = "HELLO WORLD"
console.log(shout.toLowerCase()) // hello world