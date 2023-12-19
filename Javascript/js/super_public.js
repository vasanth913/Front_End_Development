//super, child, private, public

//Below is the parent class

/* If we use ._ then it means it's a private property used within the class */
class Pizza{
    constructor(sizePizza, typePizza){
        this.size= sizePizza;
        this.type= typePizza;
        this._crust= "original";
    }
    getCrust() {
        return this._crust;
    }
    setCrust(crustPizza) {
        this._crust = crustPizza;
    }

    bake(){
        return console.log(`Baking a ${this.size} ${this.type} ${this._crust} crust pizza`);
   
    }
}

const myPizza = new Pizza("small","thin");

myPizza.setCrust("Egg");

myPizza.bake();

// Child class 

class specialPizza extends Pizza {
    /*To use the properties of the parent class we need to use super and 
    we can access inside the class using this */
    constructor(sizePizza){
        super(sizePizza);
        this.type= "margarita";
    }

    slice(){
        return console.log (`Our ${this.type} ${this.size} pizza has 8 slices`);
    }
}

const mySpecialPizza = new specialPizza("small");

mySpecialPizza.slice();