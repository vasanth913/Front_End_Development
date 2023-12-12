//Ternary Operators

// condition ? exprIfTrue : expreIfFalse;

//Example 1:

const age = 26;

const result = age > 26 ? "qualified" : "not qualified";

console.log('result', result);

//Example 2:

let testScore = 90;

let grade = testScore > 90 ? 'A' : testScore < 90 ? 'B' : 'C';

console.log('grade', grade);

//Example 3:

let player = "rock";
let computer = "paper";

const gameResult = player === computer ? "Tie" : (player === "rock" && computer === "paper") ? 
(computer === "scissor" ? "player wins" : "computer wins") : "No Match"; 

console.log('Game Result ***', gameResult);