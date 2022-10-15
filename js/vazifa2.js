'use strict'

function showDB(private) {
    let private = false;
    if (private == false ) {
        "hamma ma'lumotlar";
    } else {
        "yoq"
    } 

}

console.log(showDB());

function writeGenres() {
    num = 0
    for (let i = 1; i <= 3; i++){
        num = i
    }
     return `Yaxshi ko’rgan janringiz ${num}`
    
}

console.log(writeGenres())