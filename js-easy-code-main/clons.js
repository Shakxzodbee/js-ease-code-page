"use strict";

function logger(x,y,z){
    console.log(x + y +z);
}


logger(1 ,2 ,3);


// const calc = [1 , 2 ,3]


const arr = ['x' , 'y']
const newArr = [...arr];


const numbers = {
    x:19,
    y:5,
}
const newNumbers = {...numbers}
console.log(numbers);
console.log(newNumbers);
