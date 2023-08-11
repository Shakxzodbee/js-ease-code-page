'use strict'


const car = {
name:'BMW',
  color:'red',
  extra:{
  isAirbag:false,
    ballon:5,
  },
}

const clone = JSON.parce(JSON.stringfy(car))

clone.extra.ballon = 10

console.log(clone)
console.log(car)


// json.stringfy = objectdan json farmatga ogirib beradi
// json.parce = json formatdan objectga ogirib beradi
