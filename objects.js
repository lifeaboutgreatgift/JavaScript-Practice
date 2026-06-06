// In this file we will cover **** OBJECTS
// Objects are the most foudational important part of javascript.

// object is only non-primitive data type in js data type out of 8. the other 7 data types are primitive.
//primitives contain one single value at the time.
// object is a complex structure used to store collections of data.

// data stored in key-value pairs. 

let user = {
    name : "Jane",
    age : 20,
    isWriter: true,
    hasSibling : true
}

console.log(user.hasSibling);

// in console.log put (object.key)- user.hasSibling, here period (.) is dot natation to access an object's properties.
// property values are accessible using the dot notation.

/*let user = new Object();  ~ "object constructor" syntax
let user = {};   ~ "object literal" syntax
object is like cabinet where you put folder in it. in object, folder is [key: value] - this whole key value thing called property.
 - object constructor used for create multiple distinct objects, (use case) blueprints for repetitive date structures.in easy words, used as a structural blueprint or template to create and initialize multi individual objects.

 first, covers object literal.
 
 */

 // dot notation - dot requirest the key to be valid variable identifier.
 // it has rules: no spaces, don't start with a digit and doesn't include special charactes($ and _ are allowed).
// used dot natation to read folders.

// Bracket notation(multi-word keys)
// this is more flexible than dot notation.

let writer = {
    name: "Jane",
    "likes birds": true,   // a key with a space must be wrapped in quotes
};


console.log(writer["likes birds"]);


// Bracket Notation Superpower: Dynamic Key Lookup
// Dot notation requires you to hardcode the exact folder name. 
// Bracket notation allows you to use a VARIABLE to choose the folder on the fly.

let userSelection = "name"; 
console.log(writer[userSelection]); // Evaluates to writer["name"] -> Prints: "Jane"


// Modifying Objects (Adding and Deleting properties)
// Objects are mutable, meaning you can add or remove folders on the fly.

writer.rank = "Gold";       // Adding a brand new folder named 'rank'
delete writer["likes birds"]; // Surgical extraction: permanently deletes 'likes birds'


// Property Existence Check (The "in" Operator)
// Used to check if a specific folder exists inside the cabinet. Returns true or false.

console.log("rank" in writer);       // Prints: true
console.log("age" in writer);        // Prints: false (folder does not exist)


// The for...in Loop (Automated Cabinet Audit)
// Walks through every single folder in the object one by one.

for (let key in writer) {
    console.log(key);        // Prints the folder tab label (e.g., "name", "rank")
    console.log(writer[key]); // Prints the value inside that folder (e.g., "Jane", "Gold")
}


// Memory Architecture: Reference Copying (The Master Trap)
// Primitives copy by value (independent copies). Objects copy by REFERENCE.
// You do not clone the cabinet; you just hand over a duplicate KEY to the same cabinet.

let admin = writer; // Both variables now point to the EXACT SAME object in the Heap memory.
admin.name = "Pete"; 
console.log(writer.name); // Prints: "Pete"! The original writer object was mutated.


// Garbage Collection & Unreachability
// If you set an object reference to null (writer = null;), you sever the link.
// When an object has zero pointers leading to it, it becomes "unreachable".
// The engine's Mark-and-Sweep algorithm will automatically wipe it from Heap memory.


// Methods and the "this" Keyword
// A folder inside an object can hold an entire function recipe. This is called a Method.
// The "this" keyword represents a self-reference mirror ("this exact cabinet I am inside").

let wizard = {
    name: "Merlin",
    mana: 20,
    castSpell: function() {
         this.mana -= 5; // 'this.mana' means 'wizard.mana'
    }
};
wizard.castSpell(); // Executing the method updates wizard.mana to 15