// 想法 : click event 掛 classname 到 DOM 上面，改變 div.answer 的height ， 同時改變按鈕

const Btn = document.querySelectorAll('.toggle')
const Answer = document.querySelectorAll('.answer')
const icons = document.querySelectorAll('i')

//直接透過更新className的方式變換按鈕icon，希望可以減少記憶體消耗

// Btn.addEventListener('click', () => {
//     Answer.classList.toggle('active')

//     if(icons.className === "far fa-plus-square"){
//         icons.className = "far fa-minus-square"
//     } else {
//         icons.className = "far fa-plus-square"
//     }
// })
// let i = Btn[i]

//不行
// Btn.forEach((e) => addEventListener('click', (e) => {
//     Answer[0].classList.toggle('active')
//     console.log(e);
// }))

Btn[0].addEventListener('click', () => {
    Answer[0].classList.toggle('active')

    if(icons[0].className === "far fa-plus-square"){
        icons[0].className = "far fa-minus-square"
    } else {
        icons[0].className = "far fa-plus-square"
    }
})
Btn[1].addEventListener('click', () => {
    Answer[1].classList.toggle('active')

    if(icons[1].className === "far fa-plus-square"){
        icons[1].className = "far fa-minus-square"
    } else {
        icons[1].className = "far fa-plus-square"
    }
})
Btn[2].addEventListener('click', () => {
    Answer[2].classList.toggle('active')

    if(icons[2].className === "far fa-plus-square"){
        icons[2].className = "far fa-minus-square"
    } else {
        icons[2].className = "far fa-plus-square"
    }
})

// if(icons[i].className === "far fa-plus-square"){
//     icons[i].className = "far fa-minus-square"
// } else {
//     icons[i].className = "far fa-plus-square"
// }