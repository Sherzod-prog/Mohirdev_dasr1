'use strict'

// const now = new Date()

// console.log(now);
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getTime());
// console.log(now.getSeconds());


// let start = new Date()

// for(let i = 0; i <  1000000; i++){
//      let comp = i ** 3
//      comp
// }

// let end = new Date()

// alert(`asas ${end - start}`);

// const deadline = '2022:11:23'
//      console.log(deadline);


function Car(name, color, mph){
     this.name = name
     this.color = color
     this.mph = mph
     this.isAirbag = true
     this.speed = function (){
          console.log(`Speed of car ${this.name} is ${this.mph}`);
     }
}

Car.prototype.sayHello = function (){
     console.log(`Car name of ${this.name} say hello`);
}

const bmw = new Car('bmw', 'red', 320)
const merc = new Car('merc', 'blue', 210)

bmw.sayHello()
merc.sayHello()
 
bmw.speed()
merc.speed()

console.log(bmw);
console.log(merc);
