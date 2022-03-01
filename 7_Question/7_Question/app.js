// 想法 : click event 掛 classname 到 DOM 上面，改變 div.answer 的height ， 同時改變按鈕

const Btn = document.querySelectorAll('.toggle')
const Answer = document.querySelectorAll('.answer')
const icons = document.querySelectorAll('i')

//直接透過更新className的方式變換按鈕icon，希望可以減少記憶體消耗
console.log(icons);
console.log(Btn);

// Btn.addEventListener('click', () => {
//     Answer.classList.toggle('active')

//     if(icons.className === "far fa-plus-square"){
//         icons.className = "far fa-minus-square"
//     } else {
//         icons.className = "far fa-plus-square"
//     }
// })

Btn[0].addEventListener('click', () => {
    Answer[0].classList.toggle('active')
})
Btn[1].addEventListener('click', () => {
    Answer[1].classList.toggle('active')
})
Btn[2].addEventListener('click', () => {
    Answer[2].classList.toggle('active')
})