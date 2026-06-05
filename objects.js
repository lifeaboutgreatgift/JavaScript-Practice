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

