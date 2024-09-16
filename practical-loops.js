// Part 1: Fizz Buzz

for (let x = 0; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0){
       // console.log("Fizz Buzz")
    } else if (x % 3 === 0){
       // console.log("Fizz")
    } else if (x % 5 === 0){
       // console.log("Buzz")
    } else {
       // console.log(x);
    }
}

// Part 2: Prime Time

let n = 1171;
let nextPrime;
let i = n + 1;

// !nextPrime is short hand for nextPrime === undefined
outerLoop: while (!nextPrime) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0){
            i++
            continue outerLoop;
        }
    }

    nextPrime = i;
}
console.log("Next prime number after ", n , " is " , nextPrime);