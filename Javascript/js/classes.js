// Classes
/* We will be using "Classes" as a template to create the object. It is introduced in ES6 */

/* Usage of classes example : classes can be used when there are many students in a class and we want to create an object for different students with similar key and value, we can use classes */

const myPizza = {
    size: "medium",
    crust: "original",
    bake: function(){
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
    }
}

//myPizza.bake();

class Pizza{
    /* We can pass the paramters in the constructor to make this class as a blue print to 
    create different objects */
    constructor(typePizza, sizePizza,crustPizza){
        //It's like initilizing the variable as we used to assign as a key in an object
        this.type = typePizza;
        this.size= sizePizza;
        this.crust= crustPizza;
    }
    bake(){
        return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
    }
}

const anotherPizza = new Pizza("margarita","small","original");

/*we can create new classes with different paramters */

const oneMorePizza = new Pizza("Fresh Veggie","large","thin");


oneMorePizza.bake();

anotherPizza.bake();

console.log('anotherPizza', anotherPizza.size);