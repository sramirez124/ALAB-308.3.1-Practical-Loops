// Part 1: Fizz Buzz
console.log("==================== Part 1 ====================");
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
console.log("==================== Part 2 ====================");
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
// console.log("Next prime number after ", n , " is " , nextPrime);

// Part 3: Feeling Loopy
const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

let currentCell = 1;

for (let i = 0; i < csvString.length; i++) {

    if (csvString[i] === ","){
        currentCell++;
        continue;
    }

    if (csvString[i] === "\n"){
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
        currentCell = 1;
        continue;
    }

    switch (currentCell){
        case 1:
            cell1 += csvString[i];
        break;
        case 2:
            cell2 += csvString[i];
        break;
        case 3:
            cell3 += csvString[i];
        break;
        case 4:
            cell4 += csvString[i];
        break;
    }

    if (currentCell === 4 && csvString[i + 1] === "\n"){
        console.log(cell1, cell2, cell3, cell4);
    }
}
