'use strict'

const searchImg = document.querySelector('.list-top-img1')
const listTop = document.querySelector('.list-top')
const listMain = document.querySelector('.list-main')
const searchMain = document.querySelector('.search-main')
const dateBtn = document.querySelectorAll('.search-date-span')
const laterBtn = document.querySelector('#later')
const channelBtn = document.querySelectorAll('.search-channel-btn')
const searchBtn = document.querySelector('.search-btn')
console.log(searchMain);
//搜索框出现
let direction = 'left'
searchImg.addEventListener('click', function () {
  searchMain.classList.add(`slide-${direction}`)
  listMain.classList.add(`slide-${direction}-out`)
  direction = direction === 'left' ? 'right' : 'left'
  if (direction === 'right') {
    searchMain.classList.remove(`slide-right`)
    listMain.classList.remove(`slide-right-out`)
  }
})

// 按钮选择
const btnChoose = function (btnType, activeClass) {
  let cnt = 0;
  btnType.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.classList.contains(`${activeClass}`)) {
        btn.classList.remove(`${activeClass}`)
        cnt--
      } else if (cnt < 1) {
        btn.classList.add(`${activeClass}`)
        cnt++
      }else if(cnt === 1){
        btnType.forEach(function(btnAll){
          btnAll.classList.remove(`${activeClass}`)
        })
        btn.classList.add(`${activeClass}`)
      }
    })
  })
}
btnChoose(dateBtn, 'search-date-active')
btnChoose(channelBtn, 'search-channel-active')


