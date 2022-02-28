// 想法 : query buttons來做click的事件，把active的class掛到DOM上，改變z-index => 1

const Open = document.getElementById('btn-open')
const Close = document.getElementById('btn-close')
const modal = document.querySelector('.modal')

Open.addEventListener('click', () => {
    modal.classList.add('active')
})

Close.addEventListener('click', () => {
    modal.classList.remove('active')
})