'use strict'
 
    // 58 dars 

// const FriendCome = true

// const meetingFriend = new Promise ((resolve, reject ) => {
//     if (FriendCome ){
//         const msg = "Frend I'm there"
//         resolve(msg)
//     }else{
//         const err = "I'm can't come there"
//         reject(err)
//     }
// })

// meetingFriend
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("I'm calling you"))

// console.log('Request data ...')

// const req = new Promise ((resolve) => {
    
//     setTimeout(() => {
//         const product = {
//             name: 'car',
//             color: 'black'
//         }
//         console.log('Processing data ...');        
//         resolve(product)
//     }, 2000)
// })

// req
//     .then((data) => {
//         return new Promise ((resolve ,reject) => {
//             setTimeout(() => {
//                 data.status = 'ordered'
//                 console.log('Get data ... ')
//                 reject()
//             }, 2000)
//         })
//     })
//     .then((result) => console.log(result)) 
//     .catch(() => console.log('Somthing when wrong!'))
//     .finally(() => console.log('Fetching end'))


            // 59 dars

// const request = (time) => {
//     return new Promise ((resolve) => {
//         setTimeout(() => resolve(), time )
//     })
// }


// request(1000).then(() => console.log('Request 1000 ms'))
// request(2000).then(() => console.log('Request 2000 ms'))
// request(3000).then(() => console.log('Request 3000 ms'))


// Promise.all([request(1000), request(2000), request(3000)]).then(() => 
// console.log('All')
// )

// Promise.race([request(1000), request(2000), request(3000)]).then(() => 
// console.log('All')
// )
