//Numbers

const myNumber= 12;

const myFloat = 22.01;

console.log('check namber and Float', myNumber === myFloat);

/*Converting String to a number */

const variable = "42"

console.log('Convert String to number', variable, Number(variable)); //42

console.log('Add the variable', Number(variable) + 3); //45

/* It cannot convert the alphabet to a number */
console.log('Add the variable', Number("Vasan") + 3); //NaN

/* Another interesting concept when we send the boolean function */
/* In Javascript true act as 1 and false act as 0 */
console.log('Add the variable with boolean function', Number(true) +3 ); //4

//Number Methods

/*isInteger */
console.log('isInteger', Number.isInteger(42)) //true
console.log('isInteger', Number.isInteger(42.90)) //false

/* parseFloat */
/* It will take only float value */
console.log('parseFloat', Number.parseFloat('42.908aa')) //42.908
console.log('parseFloat rounded', Number.parseFloat(42.0)) //42 (rounded Value)
console.log('parseFloat', Number.parseFloat('42aaa.0aa')) //42
console.log('parseFloat Invalid value', Number.parseFloat('aa42aaa.0aa')) //NaN

/*Similarly there is parseInt */
console.log('parseInt', Number.parseInt('42.908aa')) //42
console.log('parseInt Invalid', Number.parseInt('aaa42.908aa')) //NaN

/* toFixed, It will parse the float number to fixed decimal but it will convert to string  */

console.log('toFixed', Number.parseFloat('42.10888aa').toFixed(2)) //42.11

/* toString: it will convert the number to string*/
console.log('toString', myFloat.toString()); //22.01

/*chaining concept multiple parsing and conversion we can do
For eg: converting to uppercase, then split, then slice*/
console.log('chaining concept', Number.parseFloat('42.10888aa').toFixed(2).toString()); //42.11

/*Number.isNaN and isNaN */
/* First it check whether 42 is not a number (NaN) and then it do Number.isNaN */
console.log('Number isNaN with number', Number.isNaN(42)); //false
console.log('Number isNaN with string', Number.isNaN("hello")) //false
/* Whether Hello is a not a number (NaN) if yes then it is true */ 
console.log('isNaN', isNaN("Hello")); //true