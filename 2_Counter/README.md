# Counter 計數器
**嘗試做一個計數器，練習2條件以上的判斷，以及跟著數值的正負轉換顏色。**

<p align = "center">
 <img src="https://github.com/TYTforCoding/FrontEnd-Practice/blob/main/2_Counter/demo/1.png" alt="Project" height=600px>
</p>

<p display = flex align = "center">
 <img src="https://github.com/TYTforCoding/FrontEnd-Practice/blob/main/2_Counter/demo/4.png" alt="Decrease -1" height=400px>
 <img src="https://github.com/TYTforCoding/FrontEnd-Practice/blob/main/2_Counter/demo/5.png" alt="Reset" height=400px>
 <img src="https://github.com/TYTforCoding/FrontEnd-Practice/blob/main/2_Counter/demo/2.png" alt="Increase 1" height=400px>
</p>
 
### 使用到的語法 : 
**Javascript :**
  * if else statement
  * querySelector & querySelectorAll         (學習直接引入成陣列，之後就能使用Map,forEach,filiter等高階語法)
  * forEach                                  (嘗試以更簡潔的寫法選取buttons)
  * Array.className                          (了解透過event的value可以做到篩選甚至更多事)
  * const v.s let
  * Element.style.color & Element.innerHTML
  * addEventListener

```js
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
    
// click function 計數器功能 
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
```
