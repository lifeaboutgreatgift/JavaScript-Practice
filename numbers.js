// ── NUMBERS IN JAVASCRIPT ─────────────────
// Unlike Python → JS has only ONE number type
// integers and decimals are both just "number"!

// ── 1. BASIC NUMBERS ──────────────────────
let integer = 100
let decimal = 9.99
let negative = -50
let big = 10000

console.log(typeof integer)   //number
console.log(typeof decimal)  //number
// both are just "number" in JS!

// ── 2. BASIC MATH ─────────────────────────
console.log(10 +5)  //15 addition
console.log(10 - 5)  // 5 subtraction
console.log(10 / 3)   //3.333... division
console.log(10 * 5)   //50 multiplication
console.log(10 % 3)   //1 remainder
console.log(2 ** 10)  // 1024 power


// ── 3. MATH OBJECT ────────────────────────
// JS has built in Math toolbox
// like import math in Python!

console.log(Math.PI)                //3.14159...
console.log(Math.round(4.6))           // 5 round to nearest
console.log(Math.round(4.4))           // 4
console.log(Math.floor(4.9))          // 4 always round Down
console.log(Math.ceil(4.1))           // 5 always round Up
console.log(Math.abs(-50))            //50 always positive
console.log(Math.sqrt(16))           // 4 squqre root
console.log(Math.pow(2, 10))          //1024 power
console.log(Math.max(5, 10, 3, 8))     // 10 highest
console.log(Math.min(5, 10, 3, 8))      // 3 lowest

// ── 4. RANDOM NUMBERS ─────────────────────
// Math.random() → gives decimal between 0 and 1

console.log(Math.random())  // 0.7823... random!

// random number between 1 and 10
let random = Math.floor(Math.random() * 10) + 1
console.log(random)         // random 1-10!

// random number between 1 and 100
let random100 = Math.floor(Math.random() * 100) + 1
console.log(random100)      // random 1-100!
