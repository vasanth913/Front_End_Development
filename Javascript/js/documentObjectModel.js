//Document Object Model

/* To get the Id of an element */
const view1 = document.getElementById("view1");

console.log('view1', view1);

 /* To get the element by querySelector using Id */

 const view2 = document.querySelector("#view2");

 console.log('view2', view2);

 /* Applying style to view1 and view2 */

 view1.style.display = 'none';

 view2.style.display = 'flex';

 /* To get the elements by className */

 const views = document.getElementsByClassName("view");

  /* To get the elements by className using querySelectorAll we can use both Id and class */

  const sameViews = document.querySelectorAll(".view2");

  console.log('sameViews', sameViews);

/* we can select multiple contents under the id or class */
  
  const divs = view1.querySelectorAll('div');
  
  console.log('divs', divs);

  const sameDivs = view1.getElementsByTagName("div");

  console.log('sameDivs', sameDivs);

  /* We want to select particular divs */

  const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");

  console.log('evenDivs', evenDivs);

  evenDivs[4].style.backgroundColor = "purple";

  for(let i=0;i <evenDivs.length;i++){
     evenDivs[i].style.width = "150px";
      evenDivs[i].style.backgroundColor= "green";
  }

  /*Changing the text of nav */

  const navText = document.querySelector("nav h1");

  console.log('navText',navText);

  navText.textContent="Hello World";

  const navBar= document.querySelector("nav");
  navBar.innerHTML='<h1>Dhuddu</h1> <p>Subscribe</p>'
  navBar.style.justifyContent= "space-evenly";

  console.log(evenDivs[0].parentElement);

  console.log(evenDivs[0].parentElement.children);

  /* To add an new element */

  view2.style.display="flex";
  view2.style.flexDirection="row";
  view2.style.flexWrap="wrap";
  view2.style.margin="10px";

  const createDiv =(parent, iter) => {
    const newDiv= document.createElement("div");
    parent.append(newDiv);

    newDiv.style.border= "1px solid black";
    newDiv.style.width='100px';
    newDiv.style.height="100px";
    newDiv.style.color="black";
    newDiv.style.backgroundColor="yellow";
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    newDiv.textContent = `Hello thambi ${iter}`;
  } 

  for(let i=1; i<12;i++){
    createDiv(view2,i)
  }

