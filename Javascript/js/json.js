//JSON

/* To send and receive data in many programming languages */

const myObj = {
    myName: "Vasanth",
    content: ["Earn", "Grow", "Give"],
    sub: function () {
        return `My name is ${myName} and i am learning these ${content}`
    }
}

const sendJSON = JSON.stringify(myObj);

console.log('myJsonObject', sendJSON); //{"myName":"Vasanth","content":["Earn","Grow","Give"]}

console.log('type of myObj', typeof myObj); //object

console.log('type of myJsonObject', typeof sendJSON); //string

/* Note: JSON will leave out the functions in the above object and also we cannot access
like this "sendJSON.myName" because JSON is just a string/file type */

const receiveJSON = JSON.parse(sendJSON);

/* JSON.parse --> It will convert JSON string into an object and we can use it to disply the
data in the web */

console.log('receiveJSON', receiveJSON); //{myName: 'Vasanth', content: Array(3)}

console.log('type of receiveJSON', typeof receiveJSON); //object

console.log('receiveJSON', receiveJSON.myName); //Vasanth