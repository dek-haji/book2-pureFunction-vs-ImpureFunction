console.log("yep")
let firstName = "dek";
let lastName = "haji";
console.log(`${firstName}, ${lastName}`)

// i created a function that takes two arguments, the first argument is lastname and firstname also we added some string concatination


function displayName(lastName, firstName){
    return(`${firstName}, ${lastName} is awesome `)
}

displayName("dek", "haji")

let myNewName = displayName("david", "sara");
console.log(myNewName);

let myNewestName = displayName("abu", "mansur")
console.log(myNewestName)

        // pure function
//A pure function is one that is consistent and has no effect on anything else in your system.

// i don't know why the function aint returning anything when i use return but works in console.log
const bugsquashers = function(bug, squasher){
    return `the ${bug} was squashed by a ${squasher}`
}
bugsquasher("taco", "yummy")
// That function will return the exact same value, given the same inputs every time.
function bugsquasher(bug, squasher){
    console.log(`the ${bug} was squashed by a ${squasher}`)
}
bugsquasher("dek", "haji")




                // impure function
//Impure functions produce different results upon execution
const noise = function(){
    console.log(Math.random())
}
noise()

let updateDOm = function(message){
    const el = document.querySelector(".message")
    el.innerHTML += message
}

updateDOm("the DOM is showing something")
updateDOm("let me try again and see what will show the DOM")
