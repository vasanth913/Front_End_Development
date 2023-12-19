const submitButton = () => {
    const colorPalette = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
    const main = document.getElementById("main");
    const span = document.querySelector("div h1 span");
    span.textContent = colorPalette;
    main.style.backgroundColor = colorPalette;
}


//dhuddu example

/* const colors = ["green", "red", "rgba(133,122,200)", "#F13023"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumer = getRandomNumber();

    document.style.body.backgroundColor=colors[randomNumer];
    color.textContent=colors[randomNumer];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
} */