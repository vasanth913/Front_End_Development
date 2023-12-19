//Arrays

// Consider array like a shelves

const myArray = [];
// adding element

myArray[0] = "Vasanth";
myArray[1] = "Subscribe";
myArray[2] = 999;
myArray [3] = true;

console.log(myArray);

console.log(myArray.length);

console.log(myArray[myArray.length-1]); //To get the last element in the array

/* To add or remove an element at the last, use push and Pop */

myArray.push("click") //Add an element in the array at the last

myArray.pop() //Remove an element in the array at the last

/* To add or remove an element at the first, use unshift and sift */

myArray.unshift("Hello");  //Add an element in the array at the first

myArray.shift();  //Remove an element in the array at the first

console.log('push,pop, unshift,shift', myArray);

/* Using push or unshift to a const will give you a length of the array */

const lastItem = myArray.push("vasa");

console.log('lastItem', lastItem); //5

/* Using pop or shift to a const will give you the last and first element in the array */

/* When using shift index value will change */

const firstItem = myArray.shift("vasa");

console.log('firstItem', firstItem); //Vasanth

/* slice has start and end value(End value won't be taken) to get the element inside the array */

const sliceItem = myArray.slice(0,2);

console.log('sliceItem', sliceItem); //['Subscribe', 999]

const mySpliceArray1 = [];
// adding element

mySpliceArray1[0] = "Gautam";
mySpliceArray1[1] = "Harris";
mySpliceArray1[2] = 9000;
mySpliceArray1 [3] = false;

/*Splice has start index, how many elements to add and insert value */

/* Inside splice if you givr elements to add as 0 then no elements will get deleted, it will
only add the element. For Eg: mySpliceArray1.splice(0,0,'Hello');*/

mySpliceArray1.splice(0, 1,'Hello');

console.log('spliceItem', mySpliceArray1); //['Hello', 'Subscribe', 999, true]

/*reverse the array using reverse method */

console.log('reverseItem', mySpliceArray1.reverse()); //[true, 999, 'Subscribe', 'Hello']

/* Join Method */

const myJoinArray = myArray.join();

console.log('myJoinArray', myJoinArray); // Subscribe,999,true,vasa

/* Split Method */

const mySplitMethod = myJoinArray.split(',');

console.log('mySplitMethod', mySplitMethod); //['Subscribe', '999', 'true', 'vasa']

/* concat two arrays using concat method */

const concatArray = myArray.concat(mySpliceArray1);

console.log('concatArray', concatArray); //['Subscribe', 999, true, 'vasa', false, 9000, 'Harris', 'Hello']

// Using Spread Operator to concat
const concatSpreadOperatorArray = [...myArray, ...mySpliceArray1];

console.log('concatSpreadOperatorArray', concatSpreadOperatorArray); //['Subscribe', 999, true, 'vasa', false, 9000, 'Harris', 'Hello']

/* If you want to change the order of the array second array at first and then the first array */

const concatOrderCHangeArray = [...mySpliceArray1, ...myArray];

console.log('concatOrderCHangeArray', concatOrderCHangeArray); //[false, 9000, 'Harris', 'Hello', 'Subscribe', 999, true, 'vasa']

