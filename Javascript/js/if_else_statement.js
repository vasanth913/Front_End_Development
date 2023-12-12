/* If Statement - Conditional Statement */

// if(condition){
//     //run code
// } else {
//     //run different code
// }

//Example 1

let customerIsBanned = false;
let finance = true;
let viewer = "Dhuddu's full JS course";
let reply;

if(customerIsBanned){
    reply = "sorry";
} else if(viewer && finance){
    /* `` --> Template Literals */
    reply = `Enjoy ${viewer} and finance content`
} else if (viewer) {
    reply = `Enjoy ${viewer}`; 
} else {
    if(!customerIsBanned) {
        reply = "Sorry I am still working";
    }
} 

console.log ('reply **', reply);


