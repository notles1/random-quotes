let quotes =[
    `"Just Do It "`,
    `"If You Master This, Just Imagine"`,
    `"Stop Imagine & Start Acting"`,
    `"Stop Wishing, Star Doing It"`,
    `"Future is Now"`,
    `"Knowledge With No Action Is Useless"`
]
function newQuote(){
let random = Math.floor(Math.random() * quotes.length)
document.querySelector('.quotes').innerHTML = quotes[random];

}