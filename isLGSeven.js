//  Here the function isLGSeven is work as show the diffrence of a number.
// but first we add a if statement is the parameter in function is not a number it return a error Message.Then declare a let variable to get difference of number minus to 7.
//  In next if statement we get a return value of difference if it is less than 7 then it return the difference.
//  Then if it's difference greater than 7, it return the number multiplied by 2 

function isLGSeven(number){  
    if (typeof number !== 'number'){
        return "Error: Give the number type of parameter";
    }
    let difference = number - 7;
    if (difference < 7){
        return difference;
    }
    else {
        return number * 2; 
    } 
}

// console.log(isLGSeven('15'));
// let output = isLGSeven("10");
// console.log(output);