'use strict'
// 按钮选择
const dateBtn = document.querySelectorAll('.search-date-span')
const channelBtn = document.querySelectorAll('.search-channel-btn')
const searchBtn = document.querySelector('.search-btn')

const btnChoose = function (btnType,activeClass) {
  let cnt = 0
  btnType.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (btn.classList.contains(`${activeClass}`)) {
      btn.classList.remove(`${activeClass}`)
      cnt--
    } else if (cnt < 1) {
      btn.classList.add(`${activeClass}`)
      cnt++
    }
  })
})
}

btnChoose(dateBtn,'search-date-active');
btnChoose(channelBtn,'search-channel-active');

searchBtn.addEventListener('click',function(){
  searchBtn.style.backgroundColor = '#D5EF7F';
})