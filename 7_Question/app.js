// 想法 : click event 掛 classname 到 DOM 上面，改變 div.answer 的height ， 同時改變按鈕

const Btn = document.getElementById('toggle')
const Answer = document.querySelector('.answer')

Btn.addEventListener('click', () => {
    Answer.classList.toggle('active')
})

// 之後要加入按鈕的變換