//  the function mindGame is a input given function which is multiplied by 3, 
//  then added by 10 and the result divided by 2,
//  then minus to 5, then return the output of the result. 
//  if the input type is not a number we added a statement which return a message that 'it is not a number type element.'  

function mindGame(input){
    if (typeof input !== 'number') {
        return 'Error: Input is not a number';
      }
    var  result = input * 3;
    result += 10;
    result /= 2;
    result -= 5;   
    return result;
}


// let input = 'hello';
// let output = mindGame(input);
// console.log(output);