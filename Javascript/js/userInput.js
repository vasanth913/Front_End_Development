// userInput

/* confirm will ask for user confirmation OK(true) and CANCEL(false) */

// let myBoolean = confirm("I am Vasanth");

// console.log('myBoolean', myBoolean);

// let myPrompt = prompt("Enter Your Name");

// console.log('myPrompt', myPrompt);

/* ?? --> Nullish coalescing operator */

let myPrompt = prompt("Enter Your Name");

/* If the value is null print the value in right side or else print left side */

console.log('myPrompt', myPrompt ?? "You didn't enter your name");

/* The reason to check if condition is if the user didn't enter the name and pressed "OK" then
it will be empty value "string" */

if(myPrompt) {
    console.log('myPrompt', myPrompt ?? "You didn't enter your name");
} else {
    console.log('myPrompt', "else You didn't enter your name");
}

//trim function

console.log(myPrompt && myPrompt.trim().length);