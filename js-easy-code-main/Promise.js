'use strict'

// const isFriendCome = false;

// const meetingRequest = new Promise((resolve, reject) => {
//     if (isFriendCome) {
//         const msg = 'Frend Im there'
//         resolve(msg)
//     } else {
//         const err = 'I cant come there'
//         reject(err)
//     }
// })
// meetingRequest
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("Im colling you"))


// const request = (time)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve(), time)
//     })
// }

// request(1000).then(()=>console.log('Requset 1000ms'))
// request(2000).then(()=>console.log('Requset 2000ms'))
// request(3000).then(()=>console.log('Requset 3000ms'))
// request(4000).then(()=>console.log('Requset 4000ms'))

// Promise.race([request(1000), request(2000), request(3000)]).then(()=>{
//     console.log('All');
// })


// Promise.race([request(1000), request(2000), request(3000)]).then(()=>{
//     console.log('All');
// })


//resolve malumot keladigan bolsa
// reject malumot qandaydr sabab bilan kelmay qolsa

// async  qaysi biri birinchi iwlasa osha birinchi ishga tushadi
// sync  ketma-ketligda ishga tushadi
