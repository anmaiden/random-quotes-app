let quoteText = document.querySelector('.quote_text');
let authorText = document.querySelector('.author');
let quoteBtn = document.querySelector('.btn');
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading...";
    fetch("https://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorText.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "Next quote";
    });
}
randomQuote();
quoteBtn.addEventListener('click', randomQuote);
//смена фоновых картинок
var imgArray = [ 
"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg", 
"https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png", 
"https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg", 
"https://img.fonwall.ru/o/wx/zakat-reka-kostyor-les.jpg?route=mid&amp;h=750", 
"https://i.artfile.ru/3000x2035_1430533_[www.ArtFile.ru].jpg", 
"https://image.winudf.com/v2/image/Y29tLmJsd3AubmF0dXJlX3NjcmVlbl82XzE1MzczNjQwMTRfMDA2/screen-6.jpg?fakeurl=1&type=.jpg", 
"https://img.fonwall.ru/o/33/goryi-sneg-derevya-polyana.jpg?route=mid&amp;h=750", 
"https://pbs.twimg.com/media/EQoxh6pXUAAn8eU.jpg:large", 
"https://www.mirlandshaft.ru/wp-content/uploads/2018/03/6-1.jpg"
]; 
var i = 0; 
function changeImg(){
    document.body.style.backgroundImage = ('url(' + imgArray[i] + ')'); 
    i++;
    if( i > imgArray.length - 1){
        i = 0;
    }
}
quoteBtn.addEventListener('click', changeImg);
//change theme
const btnTheme = document.querySelector('.theme');
const mainWrapper = document.querySelector('.quotes_wrapper');

function changeTheme(){
  mainWrapper.classList.toggle('white');
  btnTheme.classList.toggle('active')
  quoteBtn.classList.toggle('whiteBtn')
}
btnTheme.addEventListener('click', changeTheme);
