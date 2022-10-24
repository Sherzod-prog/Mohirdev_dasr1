'use strict'

const uzs = document.querySelector('#uzs'),
    usd = document.querySelector('#usd')

    uzs.addEventListener('input', (e) => {
        const request = new XMLHttpRequest()

        request.open('GET', 'json/current.json')
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
        request.send()

        request.addEventListener('load', () => {
            if ( request.status == 200 ){                
                const data = JSON.parse(request.response)
                usd.value = (+uzs.value / data.current.usd).toFixed(2)
            }else {
                usd.value = 'Something went wrong!'
            }
        } )
    })









// JSON va chuqur clone qilish


// const car = {
//     name: 'bmw',
//     color: 'blue',
//     extra: {
//         isAirbag: true,
//         ballon: 5
//     }

// }

// const clone = JSON.parse(JSON.stringify(car))


// clone.extra.ballon = 19

// console.log(clone);
// console.log(car)

// const objToJson = JSON.stringify(car)
// const jsonToObj = JSON.parse(objToJson)

// console.log(objToJson)
// console.log(jsonToObj)