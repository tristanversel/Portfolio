let body = document.querySelector('body');
let sidebar = document.querySelector('#sidebar');
let hide = document.querySelector('#hide');
let hidebtn = document.querySelector('.btnhide');
let btndark = document.querySelector('.darkmode');
let card = document.querySelector('.card');
let icons = document.getElementsByClassName('imgsection');
let btnabout = document.getElementById('btnabout');
let itemcard = document.getElementsByClassName('item');
let itemtext = document.getElementsByClassName('itemtext');
let skilltitle = document.getElementById('skillstitle');
const audioSelect = document.getElementById('select');
const audioBack = document.getElementById('enter&back');
const audioBlack = document.getElementById('blackmode');
var actif = 0;
var show = true;
var dark = false;
var entrance = true;
var scrollY;


for(i=0 ; i<icons.length ; i++){
    icons[i].addEventListener("click", () => {
        audioSelect.play();
    });
}

hidebtn.addEventListener('click', () => {
    audioBack.play();
});

btndark.addEventListener('click', () => {
    audioBlack.play();
});


icons[0].addEventListener("click", () => {
    window.scrollTo(0,0);
});
icons[1].addEventListener("click", () => {
    window.scrollTo(0,746);
});
icons[2].addEventListener("click", () => {
    window.scrollTo(0,1520);
});
btnabout.addEventListener("click", () => {
    window.scrollTo(0,746);
});





hidebtn.addEventListener('click', function(){
    hidebtn.classList.toggle('btnrotate');
    if(entrance){
        sidebar.classList.remove('sidebarentrance');
        hide.classList.remove('btnentrance');
    }
    if(show){
        hide.classList.add('moveBtn');
        sidebar.classList.add('moveSidebar'); 
        hide.classList.remove('showBtn');
        sidebar.classList.remove('showSidebar'); 
        hidebtn.setAttribute('src','images/right.png')
        show = false;
    }else{
        hide.classList.add('showBtn');
        sidebar.classList.add('showSidebar'); 
        hide.classList.remove('moveBtn');
        sidebar.classList.remove('moveSidebar'); 
        hidebtn.setAttribute('src','images/left.png')
        show = true;
    }
});

btndark.addEventListener('click', function(){
    if(dark){
        document.body.style.backgroundColor = "white";
        card.style.background = "rgb(218,218,218,0.1)";
        card.style.color = "black";
        card.style.borderTop = "1px solid rgb(217,217,217)";
        card.style.borderLeft = "1px solid rgb(217,217,217)";
        dark = false;
    }else{
        document.body.style.backgroundColor = "black";
        card.style.background = "rgb(145,145,145,0.2)";
        card.style.color = "white";
        card.style.borderTop = "1px solid rgb(55,55,55)";
        card.style.borderLeft = "1px solid rgb(55,55,55)";
        dark = true;
    }
});

window.addEventListener('scroll',function(){
    document.documentElement.scrollTop = window.scrollY;
    if(scrollY<720){
        actif = 0;
    }else{
        if(scrollY<1400){
            actif = 1; 
        }else{
            if(scrollY<2900){
                actif = 2;
            }
        }
    }

    for(i=0 ; i<icons.length ; i++){
        if(icons[i].classList.contains('imgsectionborder') && i!=actif){
            icons[i].classList.add('imgsectionbordermv');
            icons[i].classList.remove('imgsectionborder');
        }
        icons[actif].classList.remove('imgsectionbordermv');
        icons[actif].classList.add('imgsectionborder');
    }
});

itemcard[0].addEventListener('mouseover',function(){
    itemcard[0].style.height = '300px';
    itemcard[0].classList.add('itemhover');
    itemcard[1].style.height = '200px';
    itemcard[1].classList.add('itemhover');
    itemcard[2].style.height = '200px';
    itemcard[2].classList.add('itemhover');
    itemtext[0].classList.add('itemtexthover');
    itemtext[1].classList.remove('itemtexthover');
    itemtext[2].classList.remove('itemtexthover');
    skilltitle.classList.add('itemhover');
});
itemcard[0].addEventListener('mouseout',function(){
    itemcard[0].style.height = '200px';
    itemcard[0].classList.remove('itemhover');
    itemcard[1].style.height = '200px';
    itemcard[1].classList.remove('itemhover');
    itemcard[2].style.height = '200px';
    itemcard[2].classList.remove('itemhover');
    itemtext[0].classList.remove('itemtexthover');
    itemtext[1].classList.remove('itemtexthover');
    itemtext[2].classList.remove('itemtexthover');
    skilltitle.classList.remove('itemhover');
});

itemcard[1].addEventListener('mouseover',function(){
    itemcard[1].style.height = '300px';
    itemcard[1].classList.add('itemhover');
    itemcard[0].style.height = '200px';
    itemcard[0].classList.add('itemhover');
    itemcard[2].style.height = '200px';
    itemcard[2].classList.add('itemhover');
    itemtext[1].classList.add('itemtexthover');
    itemtext[0].classList.remove('itemtexthover');
    itemtext[2].classList.remove('itemtexthover');
    skilltitle.classList.add('itemhover');
});
itemcard[1].addEventListener('mouseout',function(){
    itemcard[1].style.height = '200px';
    itemcard[1].classList.remove('itemhover');
    itemcard[0].style.height = '200px';
    itemcard[0].classList.remove('itemhover');
    itemcard[2].style.height = '200px';
    itemcard[2].classList.remove('itemhover');
    itemtext[0].classList.remove('itemtexthover');
    itemtext[1].classList.remove('itemtexthover');
    itemtext[2].classList.remove('itemtexthover');
    skilltitle.classList.remove('itemhover');
});

itemcard[2].addEventListener('mouseover',function(){
    itemcard[2].style.height = '300px';
    itemcard[2].classList.add('itemhover');
    itemcard[1].style.height = '200px';
    itemcard[1].classList.add('itemhover');
    itemcard[0].style.height = '200px';
    itemcard[0].classList.add('itemhover');
    itemtext[2].classList.add('itemtexthover');
    itemtext[1].classList.remove('itemtexthover');
    itemtext[0].classList.remove('itemtexthover');
    skilltitle.classList.add('itemhover');
});
itemcard[2].addEventListener('mouseout',function(){
    itemcard[2].style.height = '200px';
    itemcard[2].classList.remove('itemhover');
    itemcard[1].style.height = '200px';
    itemcard[1].classList.remove('itemhover');
    itemcard[0].style.height = '200px';
    itemcard[0].classList.remove('itemhover');
    itemtext[0].classList.remove('itemtexthover');
    itemtext[1].classList.remove('itemtexthover');
    itemtext[2].classList.remove('itemtexthover');
    skilltitle.classList.remove('itemhover');
});  
