// 想法 ： 設定三種功能（+1 , -1 , 歸零 ）給三個不同的按鈕
// 抓取三個button設置click, 套入三種function

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const reset = document.getElementById('reset')
const counts = document.querySelector('h2')
let count = 0

plus.addEventListener('click',function() {
    count ++;
    counts.innerHTML = count;
    // console.log(count);
    return count
})
minus.addEventListener('click',function() {
    count --;
    counts.innerHTML = count;
    // console.log(count);
    return count
})
reset.addEventListener('click',function() {
    count = 0;
    counts.innerHTML = count;
    // console.log(count);
    return count
})