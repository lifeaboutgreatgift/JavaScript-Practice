// ── VARIABLES IN JAVASCRIPT ───────────────
// Variable = container that stores data
// Same concept as Python but different syntax!

// ── 3 WAYS TO DECLARE ─────────────────────

// 1. var → old way, avoid using!
var oldName = "Ava"

// 2. let → modern, value can change
let age = 19
age = 20              // ✅ can change!
console.log(age)      // 20

// 3. const → value NEVER changes
const PI = 3.14159
// PI = 3              // ❌ ERROR! can't change!
console.log(PI)       // 3.14159

// ── DATA TYPES ────────────────────────────

// String → text
let name = "Ananya"
let country = 'India'       // single quotes work too!
let intro = `I am ${name}`  // template literal!
console.log(intro)          // I am Ananya

// Number → integers and decimals both!
// (unlike Python which has int and float separately)
let score = 100
let price = 9.99
console.log(score)    // 100
console.log(price)    // 9.9

// Boolean → true/false
// (lowercase in JS, uppercase in Python!)
let isStudent = true
let isWorking = false
console.log(isStudent)    // true

// Null → empty on purpose
let emptyValue = null
console.log(emptyValue)   // null

// Undefined → declared but no value given
let notAssigned
console.log(notAssigned)  // undefined

// ── CHECK DATA TYPE ───────────────────────
// typeof tells you what type something is

console.log(typeof name)        // string
console.log(typeof score)       // number
console.log(typeof isStudent)   // boolean
console.log(typeof emptyValue)  // object (JS quirk!)
console.log(typeof notAssigned) // undefined