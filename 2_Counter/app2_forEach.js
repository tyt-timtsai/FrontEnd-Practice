//想法 : 透過forEach去篩選點到的按鈕，然後執行counter

//只能透過'querySelectorAll'選取才有list，用tag選不到全部
const btns = document.querySelectorAll('button') 
const counts = document.querySelector('h2')
let count = 0

// console.log(btns) 選取到一個陣列內涵3個button
btns.forEach(function(btns) {
    console.log(btns.className); // 可以選出每個button的名字
    const btn = btns.className; //將選出的名字儲存在區域變數

    btns.addEventListener('click',function(){
        console.log(btn) //點擊時可以篩選出單獨的button
    })
});