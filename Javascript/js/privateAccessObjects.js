//Private access Objects

/* We can use # to prevent the access of the property outside the class */

class Pizza{
    /* ES6 we can define the property before the constructor */
    /* In order to make it private we need to use # */

    crust = "original";
    #sauce = "tomoto";
    constructor(sizePizza){
        this.size= sizePizza;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(crustPizza) {
        this.crust = crustPizza;
    }

    bake(){
        return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} crust pizza`);
   
    }
}

const myPizza = new Pizza("small");

myPizza.bake(); //Baking a small original tomoto crust pizza
console.log('public property', myPizza.crust); //original
//console.log('private property', myPizza.#sauce); //Private field '#sauce' must be declared in an enclosing class
//It will thrown an error 