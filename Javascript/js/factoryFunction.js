//Factory Function

/* Factory Function is used to create Objects */

function pizzaFactory(sizePizza) {

    const crust = "original";
    const size= sizePizza;

    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    };
}

const helloPizza = pizzaFactory("small");

helloPizza.bake(); //Baking a small original crust pizza

/* We cannot access crust using factory function */

console.log('accessing crust', helloPizza.crust); //undefined