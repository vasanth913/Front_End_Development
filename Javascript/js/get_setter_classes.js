//get and setter classes


class Pizza{
    constructor(typePizza, sizePizza,crustPizza){
        this.type = typePizza;
        this.size= sizePizza;
        this.crust= crustPizza;
        /* toppings has only one value 
        this.toppings="olive" */
        /* toppings has multiple values declare array [] */
        this.toppings= [];
    }
    bake(){
        return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza
        with ${this.toppings}`);
   
    }

    getToppings() {
        return this.toppings;
    }
    setToppings(toppingsPizza) {
        /* Below to update or set the single value
        this.toppings = toppingsPizza; */

        /* Below is add multiple values in an array */
        this.toppings.push(toppingsPizza)
    }
}

const myPizza = new Pizza("margarita","small","original");

console.log('before updation Toppings', myPizza.toppings); //[]

myPizza.setToppings("sausage");

myPizza.setToppings("Egg");

myPizza.setToppings("Tutty Fruity");

console.log('updated Toppings', myPizza.toppings); //['sausage', 'Egg', 'Tutty Fruity']

myPizza.bake(); //Baking a small margarita original crust pizza with sausage