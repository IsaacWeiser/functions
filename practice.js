const calculateDogAge = (humanAge) => {
    //formula 16lnD + 31 = H
    // e^(h-31/16)=d
    // .1/1 x/12 x=12y
    let e =2.718;

    let dogAge =Math.pow(e, (humanAge-31)/16)
    if (dogAge > 0 && dogAge < 1)
    {
        dogAge = `${Math.round((dogAge.toFixed(1)) * 12)} months`
    }
    return dogAge;
}

console.log(calculateDogAge(22))

/*Remove the return statement and see what happens.
Specify the number 22 as input to the function and see what the output is.
Change the parameter to age instead of ageOfPerson and see what happens. Then see if you can resolve any issues that it causes.
Remove const dogAge = so that you just invoke the function, but don't store what it returns and see what happens.*/



let bestInShow = (favAnimal) => {
    if (favAnimal === "meow") {
        return "I like cats"
    }
    else {
        return "My favorite dog breed is " + favAnimal;

    }
}
const dog ="rottweiler"
console.log(bestInShow(dog))
console.log(bestInShow("meow"))

//add function

function sum (num1, num2, num3 ) {
    const sum = num1 + num2 + num3
    return sum;
}

console.log(`the sum is: ${sum(17,4,11)}`)

//self driving car function
const selfDrive =(direction, speed) => {
    if (speed >= 75) {
console.log(`The car is moving ${direction} at ${speed}Mph, SLOW DOWN!`)
    }
    else {
        console.log(`The car is moving ${direction} at ${speed}Mph`)
    }
}

selfDrive("forward", 75);

//even or odd

function evenOrOdd (num) {
    if (num%2 === 0){
        return "even"
    }
    else {
        return "odd"
    }
}

const num = [0,1,2,3,4,5,6,7,8,9,9.7, 8.4];

for (const number of num) {
    console.log("your number " + number + " is " + evenOrOdd(number))
}



const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]
// filter out words
const filterWords = (arr) => {
    for (const word of arr) {
        if (word.startsWith('k') === true || word.startsWith('K') === true)
        {
            arr.splice(arr.indexOf(word),1)
        }
    }
    return words;
}

filterWords(words);

console.log(`these dont start with k: 
${words}
`)

const sentence = (array) => {
    let oneLine = "";
    for (const word of array) {
        oneLine += word + " ";
    }
    return oneLine;
}

console.log(sentence(words));

// write a function that randomly determines whether you caught a tuna (33%)

let tunaFishing = () => {
    const pctNeeded = 0.33;
    const chance = Math.random()

    if (chance <= pctNeeded)
    {
        console.log("You hooked a tuna! :)");
    }
    else {
        console.log("You came up empty-handed :(")
    }
}

tunaFishing();

console.log("rand X 0= "+ Math.random()*0);

const numba =10;
console.log("math rand times a variable: " + Math.random()*numba);

//function to simulate a fast food order
const order = (sammich, addOn, beverage, sugar) => {
    const foodOrder = {
        sandwhich: sammich,
        side: addOn,
        drink: beverage,
        dessert: sugar
    }
    return foodOrder;
}

mcD = order("double cheese burger", "fries", "coke", "creampie");
console.log('ff order: ' + mcD.sandwhich + " " + mcD.drink)

//chores
const bio = {
    firstName: "isaac",
    lastName: "weiser"
}

const trashduty = person => `${bio.firstName} ${bio.lastName} needs to take out the trash`;
const dishes = person => `${bio.firstName} ${bio.lastName} needs to do the dishes`;
const bathroom = person => `${bio.firstName} ${bio.lastName} needs to clean the bathroom`;
const washDog = person => {return `${bio.firstName} ${bio.lastName} needs to wash the dog`};
const dust = person => { return `${bio.firstName} ${bio.lastName} needs to dust`};
const mop = person => { return `${bio.firstName} ${bio.lastName} needs to mop the floor`};
console.log(trashduty(bio));

const dayPlanner= (choreFunc, personObj, day) => {return `${choreFunc(personObj)} on ${day}`};

console.log(dayPlanner(trashduty, bio, "monday"));

const busyDay = (func1, func2, func3, person, day) => {return `on ${day}, ${func1(bio)} and ${func2(bio)} and ${func3(bio)}.`}

console.log(busyDay(trashduty, dishes, mop, bio, "wednesday"));

//implicit returns, explicit returns, building objects with functions, using for of loop to access objects in arrays
const dc = {
    hero: "Batman",
    villian:"joker",
    policeOrBadAss: "Gordon",
    Heroine: "Catwoman",
    femmeFatale: "Harley Quinn"
}
const marvel = {
    hero: "Captain America",
    villian:"Ronald McRegan",
    policeOrBadAss: "Nick Fury",
    Heroine: "San Francisco",
    femmeFatale: "Black Widow"
}


const metropolis = [dc, marvel];

let idk = () => "thiccness";
let whatIf = (arr) => {
    let teamUp;
    let p1 ="";
    let p2="";
    let p3="";

    for (const heryo of arr){
        if (heryo.hero.startsWith('C')===true){
            p1 += heryo.hero + " takes on ";
        }
        if (heryo.villian === 'joker')
        {
            p2+= "the " + heryo.villian + " assisted by the dastardly ";
        }
        if (heryo.femmeFatale.length > 11) {
            p3+= heryo.femmeFatale;
        }
}
teamUp = p1+p2+p3;
return teamUp;
}
const statement = idk;

console.log(statement());
console.log(whatIf(metropolis));

const bet = [1,'A'];
const alphabet = arate => {return {order:arate[0], letter:arate[1]}}
console.log(alphabet(bet));

const consticucktion = (object) => {return `who ruined america? It was ${object[1].villian}`}
console.log(consticucktion(metropolis))