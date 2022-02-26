//想法 : 透過forEach去篩選點到的按鈕，然後執行counter

//只能透過'querySelectorAll'選取才有list，用tag選不到全部
const btns = document.querySelectorAll('button') 
const counts = document.querySelector('h2')
let count = 0

// console.log(btns) 選取到一個陣列內涵3個button
btns.forEach(function(btns) {
    const btn = btns.className;

    btns.addEventListener('click',function(){
        if(btn === 'plus'){
            count ++;
        }
        else if(btn === 'minus'){
            count --;
        }
        else {
            count = 0;
        }
        counts.innerHTML = count;
    })

});