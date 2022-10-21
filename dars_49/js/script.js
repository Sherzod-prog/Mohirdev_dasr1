'use strict'

class Car {
    constructor(name, color, speed){
        this.name = name
        this.color = color
        this.speed = speed
    }
    
    calcSpeed (){
        return this.speed * 10
    }
}

class Spark extends Car {
    constructor(name, color, speed, isAirbag, extraBallon ) {
        super(name, color, speed)
        this.isAirbag = isAirbag
        this.extraBallon = extraBallon
    }

    logger (){
        console.log(`Name of car ${this.name}, color is ${this.color}. Is air bag ${this.isAirbag}. Are there ${this.extraBallon}`);
    }
}

const aboutcar = new Spark('Spark', 'orange', 20, true, 5)
aboutcar.logger()
console.log(aboutcar.calcSpeed()); 


// const bmw = new Car ('BMW', 'red', 200)
// const merc = new Car ('MERC', 'Black', 150)

// console.log(bmw);
// console.log(merc);

// console.log(bmw.calcSpeed());
// console.log(merc.calcSpeed())