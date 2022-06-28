'use strict';
const x = 5; //global scope

function myFunc(){
    let y = 9;
    console.log('y',y);
    console.log('x',x)
}


let z=10;
myFunc()

for (let i = 0; i < 5; i++) {
    console.log('i',i)    
}
//console.log('Moving on',i)
//console.log(i)

