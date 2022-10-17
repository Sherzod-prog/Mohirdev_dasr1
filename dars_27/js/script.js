'use strict'

const box = document.querySelector('#box'),
    buttons = document.querySelectorAll('button'),
    circles = document.querySelectorAll('.circle'),
    circle = document.querySelector('.circle'),
    hearts = document.querySelectorAll('.heart'),
    circleWrapper = document.querySelector('.circle__wrapper')
    ;

box.style.cssText = 'background-color: red; height: 100px; width:100px'


hearts.forEach((item) =>{
    item.style.backgroundColor = 'grey'
})


const myCircle = document.createElement('div')

myCircle.classList.add('circle')

// circleWrapper.append(myCircle)
// circleWrapper.before(myCircle)
// circleWrapper.after(myCircle)
// circles[0].after(myCircle)
// circles[1].remove()
// circles[1].replaceWith(myCircle)

circleWrapper.append(myCircle)
// myCircle.innerHTML = 'E';
myCircle.textContent = 'E'


// buttons = document.getElementsByTagName('button'),
//     circles = document.getElementsByClassName('circle'),
//     hearts = document.querySelectorAll('.heart')

