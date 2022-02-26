// 想法 : 將使用者資訊放入陣列中,透過按鈕控制index的數字(0~4)，再去抓取Array[index]的資訊，最後渲染至DOM

const img = document.querySelector('img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')
const btns = document.querySelectorAll('button')
let i = 0


// 使用者資料
const users = [
    {
        id:1,
        name: 'Alex Johnson',
        job: 'student',
        image: 'https://i.pravatar.cc/200?img=4',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id:2,
        name: 'Bill Anderson',
        job: 'Boss',
        image: 'https://i.pravatar.cc/200?img=7',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
    {
        id:3,
        name: 'Susan Smith',
        job: 'WEB DEVELOPER',
        image: 'https://i.pravatar.cc/200?img=28',
        text: 'Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry',
    },
    {
        id:4,
        name: 'Anna Johnson',
        job: 'web designer',
        image: 'https://i.pravatar.cc/200?img=41',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id:5,
        name: 'Peter Jones',
        job: 'intern',
        image: 'https://i.pravatar.cc/200?img=3',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
]

//Button function
//要把i的加減設置在0~4的循環

btns.forEach((btns) => {
    const btn = btns.id
    console.log(btn);
    btns.addEventListener('click',() => {
        if (btn == 'next'){
            i++;
            if(i > users.length-1){
                i = 0;
            }
            showAuthor(i)
        }
        else if(btn == 'prev'){
            i--;
            if(i < 0){
                i = users.length-1;
            }
            showAuthor(i)
        }else {
            i = Math.floor(Math.random() * users.length)
            showAuthor(i)
        }
    })
});


//操作DOM
function showAuthor(person) {
    const item = users[person]
    img.src = item.image;
    author.innerHTML = item.name;
    job.innerHTML = item.job;
    info.innerHTML = item.text;
}

