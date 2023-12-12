// Loops

// While loop

//Step 1: Variable initialization
//Step 2:  Condition
// Step 3: Increment value

let i = 1;
while (i<=50){
    console.log('i', i);
    i++;
}

/* Note: Loop should not be ever lasting loop. For eg: In the above example
 if you don't put i increment (i++) value then it will be never ending loop
 so be aware of it */

//Do While loop

/*If you want at least one time to print the value before satisfying the condition
  you can use do while loop */

  let j=1;
  do {
    console.log('j', j );
    j++;
  } while(j<=50)

//For loop

//for(initialization; condition ; increment)

for(let k=1;k<=50;k++){
    console.log('k', k);
}

let myName = "Vasanth";

for(let l=0; l< myName.length;l++){
    console.log('name print', myName.charAt(l));
    // console.log('name print', myName[l]);
}

//Nested Loop

/* Nested loop works like first condition passed it comes inside the second condition
till the second condition fails for the particular condition 
and then again it go back to first condition.. similary loop continues */

let myNameLoop = "Vasanth";

for (let a=0;a<myNameLoop.length; a++){
  for(let b=0; b<myNameLoop.length;b++){
    console.log('a, b', a , b);
  }
}

//Break

/* break is used to come out of the loop and stop the loop */

let m=0;

while(m<6){
    if( m === 3){
        break;
    }
    m += 1;
}

console.log('m', m);

//Continue

/* continue will break the particular condition and continue the loop, it won't stop the loop  */

let text='';

for(let n=0; n<10; n++){
    if(n === 3){
        continue;
    }
    text= text + n; // 01
}

console.log('text', text);
