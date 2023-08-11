"use strict";

const car = {
    motor:"X",
    isAirbag:true,
    isSpead: function(){
        console.log(320);
    }
}
const gm = {
    isAirbag:false,
}

gm.__proto__ = car
console.log(gm.color)
gm.isSpead

Object.setPrototypeOf(gm, car)

const Mers = Object.create(car)

console.log(Mers);
