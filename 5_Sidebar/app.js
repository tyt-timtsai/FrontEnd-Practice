// 想法 ： 與先前的Nav相同 透過toggle操作DOM完成開關，只是要新增關閉按鈕(X 按鈕)的功能

// 抓取button & sidebar
const btnMenu = document.getElementById('btn-menu')
const btnClose = document.getElementById('btn-close')
const aside = document.querySelector('aside')

btnMenu.addEventListener('click',() => {
    aside.classList.toggle('active')
})

btnClose.addEventListener('click', () => {
    aside.classList.remove('active')
})