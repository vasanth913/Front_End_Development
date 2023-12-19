//erros and error handling

"use strict";

/* Reference Error */

// variable = "vasanth"

// console.log('variable', variable);

/* The above code will print the value because in JS it won't show error in order to avoid
we need to use strict mode so that reference error will be shown  */

/* so we need to use below format */

const myVariable = "vasanth"

console.log('myVariable', myVariable);

/* Syntax Error */

/*Below throws an syntax error because Object.create() --> it should have only one dot 

Object..create() */

/* Type Error */

/* We cannot asssign const to multiple variables */

// const mobilePhone = "iPhone";

// mobilePhone = "Nokia";

/* Uncaught TypeError: Assignment to constant variable.
    at errors_errors_handling.js */

// Error Handling

/* we must use try catch and finally to handle errors */

function customError (message) {
    this.message = message;
    this.name = "custom Error";
    this.stack = `${this.name}: ${this.message}`;
}

const makeError = () => {
    try{
        // const myName="vasant";
        // myName= "monica";

        /* Below we can use for custom Error */
        //throw new customError("This is a custom Error");

        /* In javascript we have built in Method also like below */
        throw new Error("This is a custom Error");
    }
    catch(err) {
        /* We can use to show the error */
        /* We can also use error properties to show the error specific like
        err.stack, err.name */
        console.error('error', err.name);
        /* We can also log the error for the future reference */
       // logMyErrors(err.stack);
        /* We can use to show the warning */
        //console.warn('warning', err);
        /* We can show the error in the table format*/
        //console.table(err);
    }
    /* fianlly block will be executed in case there is positive scenerio in try block and 
    incase of negative case also it will go to catch block and it will come to finally block 
    so finally will be the last one to be executed */
    finally{
        console.log('.... finally');
    }

}

makeError();

const finallyexecution =() => {
    let i=0;
    while(i<5) {
        try{ 
            if(i%2 !==0){
                throw new Error ("Odd Number");
            }
        console.log('Even Number');
    } catch (err) {
        console.error('error', err.message);
    } finally{
        console.log('finally....');
        i++;
    }
}
}

finallyexecution();