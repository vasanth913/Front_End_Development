/* Switch Statements - Decision Statements*/
/* Mostly developers avoid switch case statements */

// switch(expressions or values) {
//     case choice1:
//         //run code
//         break;
//     case choice1:
//         //run code
//         break;
//     default:
//         //run
// }

//Example 1

switch("2") {
    // If it matchs with string "2" then it will print 2 or else it will print no match
    case 1:
        console.log('Print 1');
        break;
    case 2:
        console.log('Print 2');
        break;
    default:
        console.log('No Match');
}

//Example 2

console.log('******', Math.random(), Math.floor(Math.random()*4));

switch(Math.floor(Math.random()*4)) {
    // If it matchs with string "2" then it will print 2 or else it will print no match
    case 1:
        console.log('Print 1');
        break;
    case 2:
        console.log('Print 2');
        break;
    default:
        console.log('No Match');
}

//Example 3

let player = "rock";
let computer = "scissors";

switch(player) {
    // If it matchs with string "2" then it will print 2 or else it will print no match
    case computer:
        console.log('Tie!');
        break;
    case "rock":
        if(computer === "scissors"){
            console.log("Player wins");
        } else {
            console.log("Computer wins");
        }
        break;
    default:
        console.log('No Match');
}