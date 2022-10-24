'use srtict'

// MAP method

// const car = ['MeRs', 'BMw', 'RolLse roYse' ]

// const arr = car.map(item => item.toLowerCase())

// console.log(car);
// console.log(arr);

// FILTER  yangi massiv qaytaradi filter qilib

// let car = ['MeRs', 'BMw', 'RolLse roYse', 'audi']

// car = car.filter(item => item.length < 4)

// console.log(car);


// SOME va EVERY boolean qiymat qaytaradi

// const arr = [1, 'Mers', true]

// console.log(arr.some((item) => typeof item == 'number'));
// console.log(arr.every((item) => typeof item == 'number'));


// REDUCE bitta qandaydir qiymatg qaytaradi

// const arr = [15, 32, 8 ,74]
// const res = arr.reduce ((sum, cur) => sum * cur, 11)

// console.log(res);


const arr = ['MeRs', 'BMw', 'RolLse roYse' ]

const res = arr.reduce ((sum, cur) => `${sum}, ${cur}`)

console.log(res);