'use strict'

// 1. Reklama blokini o'chirish
// 2. Drama janrini komediyaga o'zgartiring
// 3. Orqa fonni o'zgartiring. JS yordamida
// 4. Seriallarni JS dagi massiv yordamida ko'rsating
// 5. Har bir serialni raqami bo'lsin.


const adv = document.querySelectorAll('.promo__adv img'),
  wrapper = document.querySelector('.promo__bg'),
  genre = wrapper.querySelector('.promo__genre'),
  seriesList = document.querySelector('.promo__interactive-list')



  // 1. Reklama blokini o'chirish
  adv.forEach((item) => {
    item.remove()
  })

  // 2. Drama janrini komediyaga o'zgartiring
genre.textContent = 'comedy'

  // 3. Orqa fonni o'zgartiring. JS yordamida
  wrapper.style.backgroundImage = 'url("img/1.jpg")'

  // 4. Seriallarni JS dagi massiv yordamida ko'rsating
  // 5. Har bir serialni raqami bo'lsin.
  
const seriesDB = {
  series: [
    'Omar',
    'The Final Legacy',
    'Ertugrul',
    'Magnificent Century',
    'The Great Seljuks: Guardians...',
  ],
}

seriesList.innerHTML = ''

seriesDB.series.forEach((item, ind) =>{
  seriesList.innerHTML += `
    <li class="promo__interactive-item">
               ${ind + 1}. ${item}
       <div class="delete"></div>
     </li>
  `
})





































// const adv = document.querySelectorAll('.promo__adv img'),
//   wrapper = document.querySelector('.promo__bg'),
//   genre = wrapper.querySelector('.promo__genre'),
//   seriesList = document.querySelector('.promo__interactive-list')

// const seriesDB = {
//   series: [
//     'Omar',
//     'The Final Legacy',
//     'Ertugrul',
//     'Magnificent Century',
//     'The Great Seljuks: Guardians...',
//   ],
// }

// adv.forEach((item) => {
//   item.remove()
// })

// genre.textContent = 'comedy'

// wrapper.style.backgroundImage = 'url("img/1.jpg")'

// seriesList.innerHTML = ''

// seriesDB.series.forEach((item, idx) => {
//   seriesList.innerHTML += `
//     <li class="promo__interactive-item">${idx + 1} ${item}
//       <div class="delete"></div>
//     </li>
//   `
// })
