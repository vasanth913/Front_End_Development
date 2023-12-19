//slice and splice

/*slice method returns a new array with selected elements,
 while splice method changes the contents of an exsisting array */

 const charactersArr = [ 
    'Witcher',
    'Harry Potter',
    'Luke Sykwalker',
    'Tony Stark'
]

const copyArr = [...charactersArr];

copyArr.splice(0,1);
console.log('copyArr', charactersArr, copyArr);

copyArr.splice(copyArr.length, 1, 'wonder women');
console.log('copyArr', copyArr);

const selected = charactersArr.slice(0,2);
console.log('selected', selected);

console.log('charactersArr', charactersArr);

//destructing

/*The destructuring assignment is a special syntax which enables unpacking(assigning) values 
from arrays or object properties directly into variables*/

const jedi = {
    id: 1,
    name: 'Luke skywalker',
    lightsaber: true,
    species: 'Human'
}

const {name: jediName,species, ...rest} = jedi

console.log('jediName', jediName);
console.group('group', species);
console.log('rest', rest);