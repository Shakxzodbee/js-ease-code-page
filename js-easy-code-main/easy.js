"use strict";

ogohlantiruvchi oyna
alert("ogohlantirish"); 


confirm true false javob olish mumkin 
const place = confirm("where are you");


prompt foydalanuvchiga savol berish va javob olish 
const currentPlace = prompt("where are you" , "Shoh");

const age = +prompt("How old are you" , "18");  //promptni oldiga + qoysa malumot turi numberga aylanadi



malumotni massivga yigiw easy usuli 
const favouriteColor = [];
favouriteColor[0] = prompt("what's your favourite color #1", "");
favouriteColor[1] = prompt("what's your favourite color #2", "");
favouriteColor[2] = prompt("what's your favourite color #3", "");

console.log(typeof favouriteColor);


const Channels = prompt("What's your favourite  YouTeber");
console.log(`https://youtube.com/${Channels}`);

const user = "Soh";
const job = "JavaScript developer";

console.log(`Username is ${user} , he is ${job} `);

prompt va alert ni terminalda ochib bolmaydi !!


console.log(6 + "6");


increment and decrement 

let incr = 10;
let decr = 10;

console.log(++incr);
console.log(--decr);
console.log(incr , decr);

console.log(6 % 2);

console.log(5 * 5 == 25);   qiymatni taqqoslash
console.log(6 * 6 === "36");  qiymat va malumot turi blan taqqoslash 

&& = va; || = yoki;
&& hamma qiymat togri bolsa true qaytaradi 
|| bita qiymat true bolsa xam true qaytaradi

const isAge = true;
const isClose = false;
const news = false;

console.log(isAge && isClose && news);
console.log(isAge || isClose || news);
console.log(!news);

console.log(2 + 2 * 2 !== "6");



// birinchi

const numberOfSeries = +prompt("nechta serial kordingiz?" , "");

//ikkinchi 
const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
};

// uchinchi

const a = prompt("oxirgi korgan serialingiz"),
    b = prompt("nechi baxo bersiz"),
    c = prompt("qanday serial kordingiz"),
    d = prompt("nechi baxo berasiz");

seriesDB.series.a = b;
seriesDB.series.c = d;

console.log(seriesDB);


let startNum = 1;
// first 
while(startNum <= 10) {
    console.log(startNum);
    startNum++;
}

second 
do{
    console.log(startNum);
    startNum++;
}while(startNum<=10)


third 

for (let i = 0; i<=10;i++){
    if(i === 8){
break 
   }
console.log(i);
}
continue yawirib qoyadi 
break owa joyida toxtatadi 


const color = "red";

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "gren":
        console.log("Goo");
        break;
    case "yelow":
        console.log("slowly");
    default:
        console.log("Traffic jam");
        break;
}


"use strict";


console.log("Open Modal");


function sayHelloWorld(text){
    console.log(text);
}
sayHelloWorld("Hello World");

function calc(a,b){
    console.log(a + b);
}
calc(10 , 5);


function sayName(name , surName){
    console.log(`My name is ${name} ${surName}`);
}
sayName("Shakhzodbek" , "Barliboyev");


function declaration ni yaratilgan funksiyadan oldin chaqirsa xam ishlayvorad  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(calc(5 , 10));


function calc(a , b){
    return a + b;
}

const sumOfAndB = calc(20 , 5);
console.log(sumOfAndB);


function expretion funkisyadan keyin chaqiriladi oldin chaqirilsa ishlamaydi !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const logger = function(){
    console.log("hello world");
}
logger();



arrow function  strelkali funksiya

const calc = (a , b)=> a + b;
console.log(calc(20 , 5)); 




const user = "Shakhzodbek";
length nechta element borligini korsatib beradi 
console.log(user.length);




const user = "Shakhzodbek";
nechinchidir malumotni olb beradi 
console.log(user[2]);




const user = "Shakhzodbek";
barcha harflarni katta harfga ogirib beradi 
console.log(user.toLocaleUpperCase());



const user = "Shakhzodbek";
barcha harflarni kichkina xarflarda qilib beradi 
console.log(user.toLocaleLowerCase());

const user = "Shakhzodbek";



const greeting = "Hello Window";
massivni ichida bolsa osha xarfni indexini chiqarib beradi   agarda yoq bolsa -1 javob qaytadi
console.log(greeting.indexOf("W"));


const greeting = "Hello Window";
massivni qaysidir indexdan nechanchidir indexgacha kesib beradi  agarda bitta qiymat beradigan bolsak osha indexdan boshqa xamma malumotni korsatib beradi
console.log(greeting.slice(1 , 12));



const greeting = "Hello Window";
massivni qaysidir indexdan nechanchidir indexgacha kesib beradi  agarda bitta qiymat beradigan bolsak osha indexdan boshqa xamma malumotni korsatib beradi
console.log(greeting.substring(4 , 6));


const greeting = "Hello Window";
nechanchidir elementdan song nechtadir soz chiqarib beradi 
console.log(greeting.substr(6 , 5));






//////////////////////////////////////////////////////// number //////////////////////////////////////////////////////////////////////////////////

const num = 9.7;
yaxlidlab beradi faqat oldinga  +
console.log(Math.round(num));

const borderWidth = "12.5px";
yaxlidlab beradi faqat orqaga - 
console.log(parseInt(borderWidth));

const borderWidth = "12.5px";
malumotni oz xolida qaytarib beradi 
console.log(parseFloat(borderWidth));



function first(cb){
    setTimeout(()=>{
        console.log(1);
        cb();
    }, 2000);
}
function two(){
    console.log(2);
}
first(two);

function edu(subject , callback){
console.log(`I wanna teach ${subject}`);
callback();
}

function done(){
    console.log("Thats great");
}
edu("JavaScript" , done);
