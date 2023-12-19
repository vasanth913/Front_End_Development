//Objects
//key-value pairs in curly braces

const myObj= {name:"Vasanth"};

const anotherObj = {
    subscriber: true,
    no: 1000,
    content: {
        earn: "JS",
        grow: "Stocks"
    },
    subDivisions: ["Earn","Grow", "Give"],
    action: function (){
        return `Rupees ${this.content.earn}`
    }
}

console.log('anotherObj ***', anotherObj.action());

console.log('myObj', myObj.name);

//Different methods to call the properties

console.log('anotherObj access property', anotherObj.subscriber); //true
console.log('anotherObj access property1', anotherObj["subscriber"]); //true
console.log('anotherObj access property2', anotherObj["content"].earn); //earn
console.log('anotherObj access property3', anotherObj["content"]["earn"]); //earn

const vehicle = {
    doors: 2,
    engine: function(){
        return "Vroomm !!"
    }
}

console.log('vehicle', vehicle.engine());

//Inherit the vehicle object into car

/* There are two methods one we can use it by Object.create and another is
using spread Operator */

//Method 1:

const car = Object.create(vehicle);

car.wheels = 4;

car.engine= function () { return 'wooshhh'};

console.log('car', car); //{wheels:4}

console.log('car', car.engine());

//Method 2:

const cars = {...vehicle}

cars.wheels = 4;

cars.engine= function () { return 'wooshhh'};

console.log('cars', cars); //{door: 2, wheels: 4, engine: ƒ}

console.log('cars', cars.engine());

// Third Object to inherit car
const tesla = Object.create(car);

/*tesla inherited car and car inherited vehicle */

console.log('tesla', tesla.doors); //2
