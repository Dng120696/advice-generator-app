'use strict';
const adviceID = document.querySelector('.advice-id')
const adviceInfo = document.querySelector('.advice-info')

const fetchData =()=>{
  fetch('https://api.adviceslip.com/advice')
  .then(res=> res.json())
  .then(data =>{
      adviceID.textContent = data.slip.id;
      adviceInfo.textContent =`"${data.slip.advice}"`;
  })
  .catch(error =>console.log(error))
}
fetchData()

const btnDice = document.querySelector('.btn-dice')
btnDice.addEventListener('click',()=>{
  fetchData()
})