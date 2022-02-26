//想法 : 透過forEach去篩選點到的按鈕，然後執行counter

//只能透過'querySelectorAll'選取才有list，用tag選不到全部
const btns = document.querySelectorAll('button') 
const counts = document.querySelector('h2')
let count = 0

// console.log(btns) 選取到一個陣列內涵3個button

btns.forEach(function(btns) {
    const btn = btns.className;

// 變色function
        // 想嘗試讓顏色判斷只有在過0的時候會啟動
        // 因為這個計數器的公差都是1，所以真正需要呼叫變色功能應該只有在 -1,0,1的時候
        // 因為btn是區域變數 所以必須把function建立在同個scope內
    const display = function(){
        if(count <= 1 && count >= -1){
            // console.log('use function'); 用來確認是否只有在 -1~1之間會呼叫
            if(count < 0) {
                counts.style.color = 'red'
            }else if(count > 0) {
                counts.style.color = 'green'
            }else {
                counts.style.color = '#000'
            }
        }
    }
// click function
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
        display(count);
    })
});


