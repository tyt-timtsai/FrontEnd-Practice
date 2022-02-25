// query抓到buttom，監聽click時改變背景顏色與字體顏色

const btn = document.querySelector('button')
const body = document.querySelector('body')
const colorName = document.querySelector('#colorName')

btn.addEventListener('click',() => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor= `#${randomColor}`;
    colorName.innerHTML= `#${randomColor}`;
    colorName.style.color= `#${randomColor}`;
})