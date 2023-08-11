'use strict';

const btn = document.querySelector('#btn');


birinci yol
<!-- <button onclick="alert('salom')">A</button> -->



ikkinchi yol 
btn.onclick = function(){
  alert("click")
}

uchinchi usul  koproq ishlatiladi

bosilish hodisasi 

btn.addEventListener('click', () =>{
  alert('salom');
})




hover hodisasi

btn.addEventListener('mouseenter' , ()=>{
  alert("salom")
})



holatni ochiradi 
btn.addEventListener('mouseenter' , ()=>{
  event.target.remove()
})

const deleteElement = (event)=>{
  event.target.remove()
}

const addElement = (evnt)=>{
  i++
  if(i === 3){
    btn.removeEventListener('click' , addElement)
  }
}

btn.addEventListener('click' , deleteElement);
btn.removeEventListener('click' , deleteElement);

const cb = (e)=>{
  console.log(e.target);
}

btn.addEventListener('click' , addElement)



const a = document.querySelector('a');

a.addEventListener('click' , (event)=>{
  event.preventDefault()
  alert("otmaydi")
})

const btns = document.querySelectorAll('button');


const logger = ()=>{
  console.log(1);
}



funksiyani bir marta ishlatish uchun 
btns.forEach((item) =>{
  item.addEventListener('click',logger , {once:true})
});
