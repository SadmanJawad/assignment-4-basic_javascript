// The function evenOdd comes out a string length calculation, 
// if string type is not string then it shows a error message
// if string.length is divided by 2 and reminder zero , it console even 
// and else it console evenOdd. then return the string for output.

function evenOdd(string) {
    if (typeof string !== 'string') {
        console.log('Error: Input is not a string');
    }
    else if (string.length % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
    return string;
}

//  function call
// let string = 33;
// let result = evenOdd(string);
