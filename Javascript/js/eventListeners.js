//Syntax

//addEventListeners(event,function, useCapture)

// const view = document.querySelector("#view2");

// console.log(view);

// const div = view.querySelector("div");
// const h2= div.querySelector("h2");

// const doSomething = () => {
//     alert("doing Something")
// }

// //useCapture default value will be false

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// h2.addEventListener('click', (event) => {
//     console.log('event.target', event.target);
//     event.target.textContent= "Subscribed";
// });

document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
    }
})

/* useCapture is false so it's event bubbling up

Event bubbling up --> I clicked an event which is in h2 but all other events are also triggered which is in div, view, it's called event bubbling up */

/* Events will always bubbling up from child to parent, it's also called propagation*/

const initApp = () => {
    const view = document.querySelector("#view2");

    console.log(view);

    const div = view.querySelector("div");
    const h2= div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");

        //view.style.backgroundColor = "purple";
    })

    div.addEventListener("click", (event) => {
        div.classList.toggle("green");
        div .classList.toggle("black");
        //div.style.backgroundColor = "blue";
    })

    h2.addEventListener("click", (event) => {
        /* To Prevent event bubbling/ propagation, we need to use stop propagation */
        //event.stopPropagation();
        const myText = event.target.textContent;
        
        myText === "Subscribe" ?
        (event.target.textContent = "Subscribed") : (event.target.textContent ="Subscribe");

        //return myText;
        
    });

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    })

    nav.addEventListener('mouseout', (event) => {
        event.target.classList.remove("height900");
    })

}

/* To prevent the default behavior in javascript while submitting the button, we need to
put event.preventDefault(); */