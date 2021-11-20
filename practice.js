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