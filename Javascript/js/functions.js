//Functions

/* Built-in methods we can call it as functions. For Eg: .chartAt(0), .toUpperCase() */

//To reuse the logic we can also use functions 
function sum(a,b=2) {
  /*a and b are parameters, for b it has default parameter 
   it will take the default parameter if there is no value supplied to b*/
  return a + b;
}
let sum1 = console.log(sum (10));

let emailAdd = "vasanth913@gmail.com";

    let emailResult =[];
    emailResult= emailAdd.split("@");
    console.log('*** using split', emailResult[0]);
    

// Using Const without function Name
const getUserNameFromEmail = function () {
    return  emailAdd.slice(0, emailAdd.indexOf("@"));
}  

console.log('*** using slice', getUserNameFromEmail());

let properCaseName = "vaSaNtH";

// Using Arrow Function 
const toProperCase = (properCaseName) => {
    return properCaseName.charAt(0).toUpperCase() + 
    properCaseName.slice(1).toLowerCase();
}

console.log('toProperCase', toProperCase(properCaseName) );
