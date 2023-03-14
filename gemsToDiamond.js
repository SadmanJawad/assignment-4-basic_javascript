// here the function gemsToDiamond 's input is three friend's gems
// here each friend's per gem power have some multiplication of diamond
// f1diamond = f1gem *21, 
// f2diamond = f2gem *32,
// f3Diamond = f3gem *43
// if totaldiamond is not a number it return a message
//if totaldiamond addition is greater than 1000 then it get minus to 2000; and return the new total diamond value
// then return the total diamond value

function gemsToDiamond(f1gem, f2gem, f3gem) {
    let f1diamond = (f1gem * 21), f2diamond = (f2gem * 32), f3Diamond = (f3gem * 43);
    let totalDiamond = f1diamond + f2diamond + f3Diamond;
    if (typeof totalDiamond !== "number") {
        return 'Error!!';
    }
    else if (totalDiamond > 1000) {
        totalDiamond = totalDiamond - 2000;
    }
    return totalDiamond;
}

// let result = gemsToDiamond('990, 3330, 5');
// console.log(result); 
