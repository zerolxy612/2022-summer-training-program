'use strict'

const sendBox = document.querySelector('.comment-sendBox')
const commentInput = document.querySelector('.comment-input')
const deleteBtn = document.querySelector('.delete-btn')
const sendBtn = document.querySelector('.send-img')
const commentMsg = document.querySelector('.details-message')
const commentBox = document.querySelectorAll('.details-message-box')

deleteBtn.addEventListener('click', function () {
  commentInput.value = ''
})

const addFunc = function (element, add) {
  element.addEventListener(`${add}`, function (e) {
    e.preventDefault()
    if (
      add === 'keyup' &&
      (e.keyCode !== 13 || commentInput.value.trim().length === 0)
    )
      return
    let text = commentInput.value
    let newComment = document.createElement('div')
    newComment.innerHTML = `<div class="details-message-box">
    <img
      src="https://ts1.cn.mm.bing.net/th/id/R-C.edb7809cdf188703a243f28064081b75?rik=44wH3KKe5dwjYQ&riu=http%3a%2f%2fimg.lieyou888.com%2f000%2f2021%2f09%2f02%2f03997744-e433-48d4-a150-aa984f86a5ce.jpg&ehk=dhH%2fS5EqwRGQlW3aM8X4euukQyY8rWvL5bD1fLdgwtU%3d&risl=&pid=ImgRaw&r=0"
      alt="user image"
    />
    <div class="details-message-box-right">
      <div class="detail-message-box-user">
        <span class="userName">Little Prince</span
        ><span class="userTime">now</span
        ><img src="../SVG/reply.svg" alt="" />
      </div>
      <div class="details-message-para">${text}</div>
    </div>
  </div>`
    commentMsg.appendChild(newComment)
    commentInput.value = ''
  })
}

addFunc(commentInput, 'keyup')
addFunc(sendBtn, 'click')
