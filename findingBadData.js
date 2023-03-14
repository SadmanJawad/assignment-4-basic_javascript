//  Here the function findingBadData represents if the number is neg number it calculate total number of neg data as bad data. 
//  in for loop initial value of index(i) is zero then when it start execute it count the array of length and check the value of index. 
//  if it is minus/bad data it add 1 in calculate variable. then it return the total neg element calculation of an array 
  
function findingBadData(numbersArray) {
    if (typeof numbersArray !== 'array') {
        return 'Error: Input is not a array';
    }
    let calculate = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] < 0) {
            calculate++;
        }
    }
    return calculate;
}

//!function call
let numbersArray = [-4, -9, -5, -33, -55];
let badDataCount = findingBadData(numbersArray);
console.log(badDataCount);