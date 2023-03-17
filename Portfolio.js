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
let skilltext = document.getElementById('skilltext');
let aboutbox = document.getElementById('rightabout');
let aboutimg = document.getElementById('moi');
let block2 = document.getElementById('aboutsection');
const audioSelect = document.getElementById('select');
const audioBack = document.getElementById('enter&back');
const audioBlack = document.getElementById('blackmode');
var actif = 0;
var show = true;
var dark = false;
var entrance = true;
var scrollY;

console.log(window.innerHeight);

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
    document.getElementById('hero').scrollIntoView();
});
icons[1].addEventListener("click", () => {
    document.getElementById('aboutsection').scrollIntoView();
});
icons[2].addEventListener("click", () => {
    document.getElementById('skillsection').scrollIntoView();
});
btnabout.addEventListener("click", () => {
    document.getElementById('aboutsection').scrollIntoView();
});
icons[3].addEventListener("click", () => {
    document.getElementById('projetsection').scrollIntoView();
});
icons[4].addEventListener("click", () => {
    document.getElementById('contactsection').scrollIntoView();
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
        document.body.style.backgroundColor = "rgb(247, 247, 247)";
        card.style.background = "rgb(218,218,218,0.1)";
        card.style.color = "black";
        card.style.borderTop = "1px solid rgb(217,217,217)";
        card.style.borderLeft = "1px solid rgb(217,217,217)";
        skilltext.style.color = "black";
        for(i=0; i<itemcard.length; i++){
            itemcard[i].style.boxShadow= "0px 0px 10px rgba(110, 110, 110, 0.4)";
            itemcard[i].style.backgroundColor = "rgb(245, 245, 245)";
            itemcard[i].style.color = "black";
        }
        aboutbox.style.backgroundColor = 'rgb(250, 250, 250)';
        aboutbox.style.color = "black";
        aboutbox.style.boxShadow = '0px 5px 20px rgba(218, 218, 218, 1)';
        aboutimg.style.boxShadow = '0px 5px 20px rgba(110, 110, 110, 0.4)';
        hide.style.borderColor = 'rgb(247, 247, 247)';
        dark = false;
    }else{
        document.body.style.backgroundColor = "rgb(30,30,30)";
        card.style.background = "rgb(145,145,145,0.2)";
        card.style.color = "white";
        card.style.borderTop = "1px solid rgb(55,55,55)";
        card.style.borderLeft = "1px solid rgb(55,55,55)";
        skilltext.style.color = "white";
        for(i=0; i<itemcard.length; i++){
            itemcard[i].style.boxShadow= "0px 0px 10px rgba(110, 110, 110, 0.1)";
            itemcard[i].style.backgroundColor = "rgb(50,50,50)";
            itemcard[i].style.color = "white";
        }
        aboutbox.style.backgroundColor = 'rgb(50, 50, 50)';
        aboutbox.style.color = "white";
        aboutbox.style.boxShadow = '0px 5px 20px rgba(110, 110, 110, 0.1)';
        aboutimg.style.boxShadow = '0px 5px 20px rgba(110, 110, 110, 0.1)';
        hide.style.borderColor = 'rgb(30,30,30)';
        dark = true;
    }
});

window.addEventListener('scroll',function(){
    bodyRectTop = document.body.getBoundingClientRect().top;
    document.documentElement.scrollTop = window.scrollY;
    hero = document.getElementById('hero').getBoundingClientRect().top - bodyRectTop;
    abt = document.getElementById('aboutsection').getBoundingClientRect().top - bodyRectTop;
    skil = document.getElementById('skillsection').getBoundingClientRect().top - bodyRectTop;
    xp = document.getElementById('projetsection').getBoundingClientRect().top - bodyRectTop;
    contact = document.getElementById('contactsection').getBoundingClientRect().top - bodyRectTop;
    if(scrollY<abt-10){
        actif = 0;
    }else{
        if(scrollY<skil-10){
            actif = 1; 
        }else{
            if(scrollY<xp-10){
                actif = 2;
            }else{
                if(scrollY<contact-10){
                    actif = 3;
                }else{
                    actif = 4;
                }
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
    itemcard[0].style.height = '290px';
    itemcard[0].classList.add('glow');
    itemcard[1].style.height = '180px';
    itemcard[2].style.height = '180px';
    itemtext[0].classList.add('itemtexthover');
    itemtext[1].classList.remove('itemtexthover');
    itemtext[2].classList.remove('itemtexthover');
});
itemcard[0].addEventListener('mouseout',function(){
    itemcard[0].style.height = '180px';
    itemcard[0].classList.remove('glow');
    itemcard[1].style.height = '180px';
    itemcard[2].style.height = '180px';
    itemcard[2].classList.remove('glow');
    itemtext[0].classList.remove('itemtexthover');
});

itemcard[1].addEventListener('mouseover',function(){
    itemcard[1].style.height = '290px';
    itemcard[1].classList.add('glow');
    itemcard[0].style.height = '180px';
    itemcard[2].style.height = '180px';
    itemtext[1].classList.add('itemtexthover');
    itemtext[0].classList.remove('itemtexthover');
    itemtext[2].classList.remove('itemtexthover');
});
itemcard[1].addEventListener('mouseout',function(){
    itemcard[1].style.height = '180px';
    itemcard[1].classList.remove('glow');
    itemcard[0].style.height = '180px';
    itemcard[2].style.height = '180px';
    itemtext[0].classList.remove('itemtexthover');
    itemtext[1].classList.remove('itemtexthover');
    itemtext[2].classList.remove('itemtexthover');

});

itemcard[2].addEventListener('mouseover',function(){
    itemcard[2].style.height = '290px';
    itemcard[2].classList.add('glow');
    itemcard[1].style.height = '180px';
    itemcard[0].style.height = '180px';
    itemtext[2].classList.add('itemtexthover');
    itemtext[1].classList.remove('itemtexthover');
    itemtext[0].classList.remove('itemtexthover');
});
itemcard[2].addEventListener('mouseout',function(){
    itemcard[2].style.height = '180px';
    itemcard[2].classList.remove('glow');
    itemcard[1].style.height = '180px';
    itemcard[0].style.height = '180px';
    itemtext[0].classList.remove('itemtexthover');
    itemtext[1].classList.remove('itemtexthover');
    itemtext[2].classList.remove('itemtexthover');
});  
