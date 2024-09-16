// Part 1: Fizz Buzz

for (let x = 0; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0){
        console.log("Fizz Buzz")
    } else if (x % 3 === 0){
        console.log("Fizz")
    } else if (x % 5 === 0){
        console.log("Buzz")
    } else {
        console.log(x);
    }
}