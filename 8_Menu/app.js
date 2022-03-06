//  想法 : 設定不同類別的array，在按鈕按下時顯示該種類的array

const cards = [
    {
    id : 1,
    dishes : 'Buttermilk Pancakes',
    category : 'Breakfast',
    price : 15.99,
    img:'https://d33wubrfki0l68.cloudfront.net/6db829f5257c82daf3db7f488b896834f7767e5d/1edb0/images/uploads/2020_03_21_easy_delicious_and_fluffy_buttermilk_pancakes_2.jpg',
    desc :"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed." 
    },
    {
    id : 2,
    dishes : 'Diner Double',
    category : 'Lunch',
    price : 13.99,
    img:'https://crummbs.co.uk/wp-content/uploads/2016/10/Diner-Double-Diablo-Burger-PWF-0085.jpg',
    desc :"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing Marfa thundercats." 
    },
    {
    id : 3,
    dishes : 'Godzilla Milkshake',
    category : 'Shakes',
    price : 6.99,
    img:'https://afsarsoft.github.io/124-menu-v1/images/item-3.jpeg',
    desc :"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral." 
    },
    {
    id : 4,
    dishes : 'Country Delight',
    category : 'Breakfast',
    price : 20.99,
    img:'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps1419_FM153592B03_24_5b.jpg',
    desc :"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut." 
    },
    {
    id : 5,
    dishes : 'Egg Attack',
    category : 'Lunch',
    price : 22.99,
    img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/4/2/3/LS-Library_Bacon-Egg-Cheese-Breakfast-Burgers_s4x3.jpg.rend.hgtvcom.616.462.suffix/1522721805486.jpeg',
    desc :"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed." 
    },
    {
    id : 6,
    dishes : 'Steak Dinner',
    category : 'Dinner',
    price : 39.99,
    img:'https://s.wsj.net/public/resources/images/B3-CS923_SFF_M_20181221135515.jpg',
    desc :"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing." 
    },
    {
    id : 7,
    dishes : 'Oreo Dream',
    category : 'Shakes',
    price : 18.99,
    img:'https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-3.jpg',
    desc :"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday." 
    },
    {
    id : 8,
    dishes : 'Bacon Overflow',
    category : 'Breakfast',
    price : 8.99,
    img:'https://afsarsoft.github.io/124-menu-v1/images/item-7.jpeg',
    desc :"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird." 
    },
    {
    id : 9,
    dishes : 'American Classic',
    category : 'Lunch',
    price : 12.99,
    img:'https://www.epicurus.com/food/recipes/wp-content/uploads/2013/05/The-American-Burger.jpg',
    desc :"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut." 
    },
    {
    id : 10,
    dishes : 'Quarantine Buddy',
    category : 'Shakes',
    price : 16.99,
    img:'https://assets.tmecosys.cn/image/upload/t_web767x639/img/recipe/ras/Assets/B142BBB1-8BEE-40E9-8DF7-522BF07F4E34/Derivates/ed2bf58f-c7cc-40fc-ae1b-3778b3e680ee.jpg',
    desc :"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing." 
    }
]

const section = document.querySelector('section')
const btns = document.querySelectorAll('button')

// 等ＤＯＭ讀取好再執行

window.addEventListener('DOMContentLoaded', function(){
    displayMenuCard(cards)
})

// 透過ＪＳ外部連結 HTML

function displayMenuCard(card){
    let displayMenu = card.map(function(item){  //抓取每個item的屬性值
        return `<div class="card">
                    <div class="img-container">
                        <img src=${item.img} alt="${item.dishes}">
                    </div>
                    <div class="info">
                        <div class="info-header">
                            <span class="dishes">${item.dishes}</span>
                            <span class="price">${item.price}</span>
                        </div>
                        <p class="disc">${item.desc}</p>
                    </div>
                </div>`;
    })
    displayMenu = displayMenu.join('') //連接每一段HTML 變成一大段
    section.innerHTML= displayMenu;
}

// 設置button的篩選機制

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.dataset.id);
        const category = e.currentTarget.dataset.id;
        const menuCategory = cards.filter(function(card){
            if(card.category === category){
                return card
            }
        });
        if(category === 'All'){
            displayMenuCard(cards)
        } else {
            displayMenuCard(menuCategory)
        }
    })
})