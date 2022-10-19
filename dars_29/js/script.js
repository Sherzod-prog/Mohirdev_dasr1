'use strict'

document.addEventListener('DOMContentLoaded', () => {


// 1. Reklama blokini o'chirish
// 2. Drama janrini komediyaga o'zgartiring
// 3. Orqa fonni o'zgartiring. JS yordamida
// 4. Seriallarni JS dagi massiv yordamida ko'rsating
// 5. Har bir serialni raqami bo'lsin.


const adv = document.querySelectorAll('.promo__adv img'),
  wrapper = document.querySelector('.promo__bg'),
  genre = wrapper.querySelector('.promo__genre'),
  seriesList = document.querySelector('.promo__interactive-list'),
  addForm = document.querySelector('form.add'),
  inpitVal = document.querySelector('.adding__input'),
  checkbox = document.querySelector("[type='checkbox']")
  // deleteSeries = document.querySelectorAll('.delete')



  // 32 dars 1. function yozing submit bosilganda sahifa qayta yuklanmasligi kerak.
  // va inputga yozilganda serialni seriesDB.series ga massivga qo'shing
  // input ichidagi qiymatni olish uchun input.value yordamida oling

  addForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let newSeries = inpitVal.value
    const favourite = checkbox.checked

    if (newSeries){
      if (newSeries.length > 18 ){
        newSeries = `${newSeries.substring(0, 18)}...`
      }
      if(favourite){
        console.log("Sevimli serial qo'shildi.")
      }
      seriesDB.series.push(newSeries)
      Arrsort(seriesDB.series)
      
    }
    
    createSeriesList(seriesDB.series, seriesList)
    event.target.reset()
  })
   

  // 32 dars 2. Agar serialni nomi 18 tadan ko'p bo'lsa uni kesib ... bilan yozing

  // 32 dars 3. Agar formada checkbox done belgisi qo'yilsa console ga "Sevimli serial qo'shildi" xabarini chiqaring

  // 32 dars 4. Hamma serial nomlari alfavit ket ma ketlikda bo'lsin

  // 32 dars IXTYORIY axlat qutisi bosilganda o'sha serial o'chirilsin




  // 29 dars 1. Reklama blokini o'chirish 
  const deleteAdv = (arr) => {
    adv.forEach((item) => {
      item.remove()
    })
  }
  

const makeChanges = () => {
  // 29 dars 2. Drama janrini komediyaga o'zgartiring
  genre.textContent = 'comedy'
  
  // 29 dars 3. Orqa fonni o'zgartiring. JS yordamida
  wrapper.style.backgroundImage = 'url("img/1.jpg")'

} 

const Arrsort = (arr) => {
  arr.sort()
}


  // 29 dars 4. Seriallarni JS dagi massiv yordamida ko'rsating
  // 29 dars 5. Har bir serialni raqami bo'lsin.
  
const seriesDB = {
  series: [
    'Omar',
    'The Final Legacy',
    'Ertugrul',
    'Magnificent Century',
    'The Great Seljuks: Guardians...',
  ],
}


function createSeriesList(series, parent){
  parent.innerHTML = ''
  Arrsort(series)
  
  series.forEach((item, ind) =>{
    parent.innerHTML += `
      <li class="promo__interactive-item">
                 ${ind + 1}. ${item}
         <div class="delete"></div>
       </li>
    `
  })

  document.querySelectorAll('.delete').forEach((trash, ind) => {
    trash.addEventListener('click', () => {
      trash.parentElement.remove()
      seriesDB.series.splice(ind, 1)

      createSeriesList(series, parent)
      
    })
  })

}

Arrsort(seriesDB.series)
makeChanges()
deleteAdv (adv)
 createSeriesList(seriesDB.series, seriesList)





































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
})