/* Get the random text from a given string */

const myName = "Vasanth Ravichandiran"

const words = myName.split("");

console.log('word split', words);

const randomIndex = Math.floor(Math.random() * words.length);

console.log('randomIndex', randomIndex);

//Solution No 1

console.log('solution', words[randomIndex]);

//Solution No 2 (It is the best solution)

console.log('Another solution', myName.charAt(Math.floor(Math.random() * myName.length)));