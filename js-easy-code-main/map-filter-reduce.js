'use strict'

// Map  method - yangi massiv qaytaradi eski massivni qiymatini ozgartirib

const car = ['Mers' , 'BMW' , 'Rolce Royce']

const arr = car.map(item => item.toLowerCase())
// console.log(arr)

// FILTER method -- yangi massiv qqaytaradi filter qilib yani saralab

const cars = ['cobalt' , 'BMW' , 'audi', 'Mersedes-benz']
const arrs = cars.filter((item) =>item.length < 5)
console.log(arrs)


// SOME / EVERY -- boolean qiymat qayataradi

const arr1 = [1 , 'Shokh' , true]
// console.log(arr1.some(/(item)=>typeof item == 'number'))  borligigga qaraydi
// console.log(arr1.every((item)=>typeof item == 'number'))  notogri qiymat bolsa false qaytaradi


// REDUCE method - bitta qandaydir qiymat qayataradi 
// 2ta parametr qabul qiladi 
// birinchi qiymat 0
// keyingi qiymat massiv qiymatiga teng 
// reduce boshlangich qiymat ham olishi mumkin masalan :  
const res = arr.reduce((sum , current)=> sum + current , 5)

let arrsd = [111 ,53 ,4 ,51, 6]
const res = arr.reduce((sum , current)=> sum + current)
