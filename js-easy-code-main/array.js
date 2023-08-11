"use strict";

const arr = [1 , 2, 3 ,4 ,5];


oxirgi elementni ochirib tashlaydi qiymat shart emas
arr.pop();


oxiridan element qoshib beradi unga qiymat berish kerak
arr.push(5);


boshidan ochirib tashlaydi 
arr.shift();


boshidan qiymat qosshib beradi qiymat berish kerak 
arr.unshift(4);


arrayni boshidan narsa olish yoki qoshish tavsiya etilmaydi yani shift  unshift codlarini


arrayni intagratsiya qilish 

for(let i = 0; arr.length; i++){
    console.log(arr[i]);
}


for(let value of arr){
    console.log(value);
}

arr.forEach(function(item, index , arr) {
console.log(`${index}: ${item} into arr ${arr}`);
});

forEach 3ta element qabul qiladi  birinchi value  ikkinchi index uchinchi massivni ozi



const movies = prompt("What's your favourite movies" , "");



xar bita , va prabeldan keyin yangi massivga qoshadi 
const userMovies = movies.split(", ");



userMovies.sort();
console.log(userMovies.join("- "));


const arr = [3 ,6 ,5 ,6,7];
arr.sort();
console.log(arr);

function compareFn(a,b){
    return a - b;
}
