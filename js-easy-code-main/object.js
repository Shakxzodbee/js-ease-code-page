console.log(theif.heigth);
delete theif.jacket;
console.log(theif);


objectni uzunligini bilish uchun



const theif = {
    jacket: "black",
    heigth: "1.7",
    colors: {
        hair: "grey",
        style: "curle",
    },
    howOut: function () {
        console.log("Fast with help doors");
    },
};
theif.howOut();

distrubtatsiya 
            const {hair , style } = theif.colors;
distrubtatsiya 

const hair = theif.colors.hair;
const style = theif.colors.style;





console.log(Object.keys(theif).length);



in arraylar blan
of massivlar blan ishlaydi




for(let key in theif){
if(typeof theif[key] === "object"){
    for(let i in theif[key]){
        console.log(`Property ${key} has value ${theif[key][i]}`);
    }
}else{
    console.log(`property ${key} has value ${ theif[key]}`);
}
}
