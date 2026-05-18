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

// ── 5. NUMBER PROBLEMS ────────────────────
// JS quirk! watch out for this!

console.log(0.1 + 0.2)      // 0.30000000000000004 😅
// floating point issue! common in all languages!

// fix it:
console.log((0.1 + 0.2).toFixed(2))   // 0.30 ✅

// ── 6. CONVERTING STRINGS TO NUMBERS ──────
// very useful when taking user input!

let strNumber = "42"
console.log(typeof strNumber)       // string

let converted = Number(strNumber)
console.log(typeof converted)       // number
console.log(converted + 8)          // 50 ✅

// parseInt → convert to integer
console.log(parseInt("42.9"))       // 42 (removes decimal!)

// parseFloat → convert to decimal
console.log(parseFloat("42.9"))     // 42.9 ✅

// what happens with invalid conversion?
console.log(Number("hello"))        // NaN!
console.log(Number("123abc"))       // NaN!

// ── 7. NaN (Not a Number) ─────────────────
// NaN = result of invalid math operation

console.log(10 / "hello")          // NaN
console.log(Math.sqrt(-1))         // NaN

// check if something is NaN
console.log(isNaN(10))             // false → it IS a number
console.log(isNaN("hello"))        // true → NOT a number
console.log(isNaN(NaN))            // true

// ── 8. toFixed() ──────────────────────────
// control decimal places!
// very useful for prices, calculations!

let price = 9.99999
console.log(price.toFixed(2))      // 10.00
console.log(price.toFixed(0))      // 10

let pi = Math.PI
console.log(pi.toFixed(2))         // 3.14
console.log(pi.toFixed(4))         // 3.1416
