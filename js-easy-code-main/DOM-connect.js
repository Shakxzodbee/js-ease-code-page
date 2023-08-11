'use strict'

const box = document.querySelector('#box')
const buttons = document.querySelectorAll('button')
const circles = document.querySelectorAll('.circle')
const circle = document.querySelector('.circle')
const hearts = document.querySelectorAll('.heart')
const circleWrapper = document.querySelector('.circle__wrapper')

buttons.style.width = "80px";
buttons.style.height = "50px";
buttons.style.marginTop = "10px";
buttons.style.border = "none";
buttons.style.borderRadius = "8px";
buttons.style.color = "#fff";
buttons.style.cursor = "pointer";
buttons.style.outline = "none";
buttons.style.position = "relative";


buttons[0].style.width = '100px'
circles[1].style.backgroundColor = 'yellow'
circle.style.backgroundColor = 'yellow'

for (let i = 0; i < hearts.length; i++) {
      hearts[i].style.backgroundColor = 'green'
    }
    
    hearts.forEach((item) => {
          item.style.backgroundColor = 'gray'
        })
        
        const btn = document.createElement('button')
        const text = document.createTextNode('I am text')
        
        document.body.append(btn)
        
        const myCircle = document.createElement('div')
        
        myCircle.classList.add('circle')
        
        circleWrapper.append(myCircle)
        circleWrapper.before(myCircle)
        circleWrapper.after(myCircle)
        circles[0].after(myCircle)
        circles[1].remove()
        circles[1].replaceWith(myCircle)
        circleWrapper.append(myCircle)
        myCircle.innerHTML = '<pre>E</pre>'
        myCircle.textContent = 'E'
        circleWrapper.insertAdjacentHTML('beforeend', '<pre>E</pre>')
        
        box.style.cssText = 'background-color: red; width: 100px; height: 100px'
        
        box.style.width = "150px";
        box.style.height = "150px";
        box.style.backgroundColor = "rgb(61, 89, 214)";
        box.style.margin = "0 auto";
