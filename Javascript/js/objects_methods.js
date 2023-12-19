//Object key and values retrievel 

const movie = {
    actor: "kavin",
    music: "Arr",
    director: "Lokesh",
    producer: "Anbu"
}

console.log("Object Keys", Object.keys(movie)); // ['actor', 'music', 'director', 'producer']

console.log("Object Values", Object.values(movie)); //['kavin', 'Arr', 'Lokesh', 'Anbu']

//delete a property using delete

console.log("delete producer property", delete movie.producer, movie); // true, {actor: 'kavin', music: 'Arr', director: 'Lokesh'}

//hasOwnProperty is used to check whether we have this property or not

console.log('hasOwnProperty', movie.hasOwnProperty("producer")); //false

//for of loop

/* for of loop is used to get the values in an array */
let movies = ['Leo','Billa', 'Jailer', 'Vikram']

for (let job of movies){
    console.log('job key', job); //Leo, Billa, Jailer, Vikram
}

//for in loop

/* for in loop is used to get the  key and values of the object */
for (let job in movie){
    /* It will get the values */
    console.log('job keys', job); // actor, music, director, producer
}

for (let job in movie){
    /* It will get the values */
    console.log('job values', movie[job]); // kavin, Arr, Lokesh, Anbu
}

for (let job in movie){
    /* To get both keys and values in the same console */
    console.log(`${job}, it's ${movie[job]}`); // actor, it's kavin etc...
}

//Destructuring the objects

const {music: myFavoriteMusicDirector, director, actor:upcomingActor} = movie;

console.log('myFavoriteMusicDirector, director, upcomingActor', myFavoriteMusicDirector, director, upcomingActor); //Arr Lokesh kavin

function sings({music}){
    /* Add curely braces to access the property from an whole object using destructuring */
    return music;
}

console.log('music', sings(movie));

