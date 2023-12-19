//Scope

// let x=2;
// let x=3;

// console.log('x', x); // It will thrown an error as it's a block scoped variable

//const x=2;
//x= 3;

//console.log('x', x); // We can't change value in const

/* We shouldn't use var in our code, we must use let and const */

var y=2;
var y=3;

console.log('y', y); // 3 
/* It won't thrown an error as it's a global scoped variable, 
It will make a big issue when multiple developers working on the project */

//global scope

var m=1;
let n=2;
const k=3;

/* var is also function scope */

//local scope //block scope
{
    let n=4;
}

//local scope //function scope
function myFunc(){
    const k=5;
}

myFunc();
console.log(k);
