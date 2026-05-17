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

// ── 5. FINDING TEXT ───────────────────────
let quote = "jack of all trades master of none"

// includes - does it contain this word?
console.log(quote.includes("trades"))    //true
console.log(quote.includes("python"))    // false

// indexOf - where does word start?
console.log(quote.indexOf("trades"))     //12
console.log(quote.indexOf("python"))     // -1 (not found!)

// startsWith and endsWith
console.log(quote.startsWith("jack"))     // true
console.log(quote.endsWith("none"))       // true

// ── 6. CUTTING STRINGS ────────────────────
let fullName = "Garrett Graham"

// slice(start, end) - cut part of string
console.log(fullName.slice(0, 7))       //Garrett
console.log(fullName.slice(8))          //Graham
console.log(fullName.slice(-6))         //Graham (from end!)

//reminder here - it depend on letters of a word garrett has 7 letters in it
//and -6 number means it target 6 letter on end from right

// ── 7. REPLACING TEXT ─────────────────────
let message = "I love Python"
let newMessage = message.replace("Python", "JavaScript")
console.log(newMessage)   //I love JavaScript

// ── 8. SPLITTING STRING ───────────────────
// split -> breaks string into array!
let fruits = "apple,banana,mango, grape"
let fruitArray = fruits.split(",")
console.log(fruitArray)
// ['apple', 'banana', 'mango', 'grape']

let words = "I love coding"
let wordArray = words.split(" ")
console.log(wordArray)
// ['I', 'love', 'coding']

// ── 9. TRIM ───────────────────────────────
// removes extra spaces from start and end
// super useful when taking user input!
let messy = "   Hello Hannah!   "
console.log(messy.trim())   //"Hello Hannah!"
console.log(messy.trimStart())    //"Hello Hannah!   "
console.log(messy.trimEnd())     //"   Hello Hannah!"

// ── 10. REPEAT ────────────────────────────
let star = "⭐"
console.log(star.repeat(5))    // ⭐⭐⭐⭐⭐

let line = "-"
console.log(line.repeat(20))   // --------------------


// ── REAL WORLD USES ───────────────────────

// 1. Username validation
let username = "  Wellsy245  "
let cleanUsername = username.trim().toLowerCase()
console.log(cleanUsername)  // wellsy245
// trim spaces + lowercase = clean username! 

// 2. Check valid email
let email = "hannahwellsy@gmail.com"
console.log(email.includes("@"))      // true
console.log(email.includes(".com"))   // true
// both true = probably valid email! 😄

// 3. Get first name from full name
let fullname = "Garrett Graham"
let firstName = fullname.slice(0, fullname.indexOf(" "))
console.log(firstName)    // Garrett

// 4. Count words in sentence
let text = "I want to become a Ice Hockey Player"
let wordCount = text.split(" ").length
console.log(`Word count: ${wordCount}`)    // 7
