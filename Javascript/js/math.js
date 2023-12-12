//Math method and properties

console.log('PI Value', Math.PI); //22/7 or 3.1415

console.log('Truncate',Math.trunc(3.5)); //3

console.log('Round off ', Math.round(Math.PI)); //3
console.log('Round off above .5 ', Math.round(4.5)); //5
console.log('Round off below .5 ', Math.round(4.1)); //1

/* Any value above .1 it will round off to next value */
console.log('ciel method', Math.ceil(4.1)); //5

/* Any value above .5 or below .5 it will round off to same value */
console.log('floor method', Math.floor(4.6)); //4

/* 3 to the power of 4 --> (3*3*3*3) */
console.log('pow method', Math.pow(3,4)); //81

/* Min method shows the lowest value */
console.log('Min method', Math.min(10,5,3,9)); //3

/* Max method shows the highest value */
console.log('Max method', Math.max(10,5,3,9,32)); //32

/* Random method gives any value above 0. and below 1 */
console.log('Random Value', Math.random()); //0.4

/* exact usage of random values in the code below 10 we can use random * 10 and floor*/
/* It will give values only from (0 to 9 ) */
console.log('Random values with floor', Math.floor(Math.random()*10)); // 2

/* exact usage of random values in the code above 10 we can use random * 10 +1 and floor*/
/* It will give values only from (1 to 10 ) */
console.log('Random values with floor', Math.floor(Math.random()*10) + 1 ); // 2