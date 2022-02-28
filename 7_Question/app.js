// 想法 : click event 掛 classname 到 DOM 上面，改變 div.answer 的height ， 同時改變按鈕

const Btn = document.getElementById('toggle')
const Answer = document.querySelector('.answer')
const icon = document.querySelector('i')

//直接透過更新className的方式變換按鈕icon，希望可以減少記憶體消耗

Btn.addEventListener('click', () => {
    Answer.classList.toggle('active')

    if(icon.className === "far fa-plus-square"){
        icon.className = "far fa-minus-square"
        console.log(icon.className);
    } else {
        icon.className = "far fa-plus-square"
    }
})
