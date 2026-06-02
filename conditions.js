// if else if - is a type of control flow statement.
// it called conditional statement or in easy word ~ decision making flow.

//first you declare a variable

// ===== THE DIRECT ACTION TYPE


let perTablePerson = 2;

if (perTablePerson <= 3 ) {
    console.log("Would you like table for two, sir?");
} else if ( perTablePerson <= 3 ) {
    console.log("Would you like group table?");
} else {
    console.log("Sorry! we're already reserved for today!")
}

//variable initialization - creating intentionally empty box;

// ==== THE STATE MUTATION TYPE

let score = 10;
let cheerUp = "Briar! Briar! Briar!" ;
let boo = "The team score is down!" ;

let finalMsg = "";
// this is an empty variable it's  reserved slot in memory.

if (score <= 5) {
    finalMsg = boo; // here we ressignmemt that slot, in cs term - variable mutation.
    //  In easy words, changing or overwriting the data that was perviously stored in memory slot.
} else {
    finalMsg = cheerUp;
}



console.log(finalMsg);
// using console for send data out to user!
// without adding console in last you can't see the output in device.


//====== THE FUNCTIONAL TYPE
// return only works inside a function

function checkTeamStatus () {
    if (score <= 5) {
        return boo;
    }else {
        return cheerUp;
    }
}

console.log(checkTeamStatus());