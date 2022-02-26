// 想法 ： 設定三種功能（+1 , -1 , 歸零 ）給三個不同的按鈕
// 抓取三個button設置click, 套入三種function

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const reset = document.getElementById('reset')
const counts = document.querySelector('h2')
let count = 0

// counter function

plus.addEventListener('click',function() {
    count ++;
    counts.innerHTML = count;
    display(count)
    // console.log(count);
    return count
})
minus.addEventListener('click',function() {
    count --;
    counts.innerHTML = count;
    display(count)
    // console.log(count);
    return count
})
reset.addEventListener('click',function() {
    count = 0;
    counts.innerHTML = count;
    display(count)
    // console.log(count);
    return count
})

//display color by number
//想法 ： 把count與0做大小比較，小於零顯示紅色，大於零顯示綠色
//考慮 ： 這樣每次按按鈕就要跑一次這個function，感覺比較消耗效能，最好是過了0之後只判斷一次

function display(count) {
    if (count > 0) { 
        counts.style.color = '#569043';
        // console.log('green');
    }else if (count < 0) {
        counts.style.color = '#ee3975';
        // console.log('red');
    }else {
        counts.style.color = '#000';
    }   
}

