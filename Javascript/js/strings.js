//Strings

let myVariable = "Mathematics";

//length Property

/* It will start from 1 */
console.log(myVariable.length); //11

//String methods

/*charAt: It will start from 0 */
console.log('charAt', myVariable.charAt(0));  // M

/* indexOf: It will show the 1st occurance of the value */
console.log('indexOf', myVariable.indexOf("at")); // 1

/* lastIndexOf: It will show the last occurance of the value */
console.log('lastIndexOf', myVariable.lastIndexOf("at")); //6

/*slice: It will slice from start to end (It won't consider last value) 
depending upon the variable inside slice */
console.log('slice', myVariable.slice(5,8)); //mat

/* toUpperCase */
console.log('toUpperCase', myVariable.toUpperCase()); // MATHEMATICS

/* toLowerCase */
console.log('toLowerCase', myVariable.toLowerCase()); // mathematics

/*includes: will check whether the value is there or not and will return a boolean value*/
console.log('includes', myVariable.includes('mat')); //true

/*split: It will split the variable as array into two by keeping "e" as center */
console.log('split', myVariable.split("e")); // ['Math', 'matics']
/*split by using space with this text "I will master FrontEnd" */
//myVariable = "I will master FrontEnd";
console.log('I will master FrontEnd', myVariable.split(" ")); //['I', 'will', 'master', 'FrontEnd']