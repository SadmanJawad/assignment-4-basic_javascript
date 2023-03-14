function evenOdd(string){
   let elementCount = string.length;
    if(string.length % 2 === 0){
        return 'even';

    }
    else{
        return 'odd';
    }
}

//! function call
let result = evenOdd("Batch");
console.log(result);
