// 想法 : 先把navigation menu藏起來，另外在css中設定一個class是menu顯示的狀態，再透過
//       EventListener讓按按鈕時把這個class掛到menu上

const btn = document.querySelector('button')
const menu = document.querySelector('.nav-menu')

// btn.addEventListener('click', function(){
//     menu.classList.add('showMenu')
// })

// 要讓事件可以判斷有沒有開按鈕，以此決定按下去是開還是關，因此要把按鈕設置成布林判斷

btn.addEventListener('click', function(){
    menu.classList.toggle('showMenu')
})

//原來加入toggle就好，不需要if statement判斷