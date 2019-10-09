var menuBtn = document.getElementById('menu');
var menuOpen = document.getElementById('menu-slide');
var closeBtn = document.getElementById('menu-close');
var menuOption = document.getElementById('option');

console.log(menuOption);

var laMetroLogo = document.getElementById('la-metro');
var intro = document.getElementById('intro');
var contentDiv = document.getElementById('content');
var profileImage = document.getElementsByClassName('img');

menuBtn.onclick = function showMenu(){
    var posInit = 100;
    var animOpen = setInterval(openMove, 1);

    function openMove(){
        if(posInit <= 0){
            clearInterval(animOpen);
            
        }
        else{
            posInit-= 2;
            menuOpen.style.transform = `translateX(${posInit}%)`;
            laMetroLogo.style.filter = `brightness(${posInit}%)`;
            menuOption.style.filter =  `opacity(${posInit}%)`;
        }
        
    }
       
};

closeBtn.onclick = function hideMenu(){
    var posEnd = 0;
    var animClose = setInterval(closeMove, 1);

    function closeMove(){
        if(posEnd >= 100){
            clearInterval(animClose);
        }
        else{
            posEnd += 2;
            menuOpen.style.transform = `translateX(${posEnd}%)`;
            laMetroLogo.style.filter = `brightness(${posEnd}%)`;
        }        
    }
}

function profileImages(){
    for(var i = 0; i < profileImage.length; i++){
        profileImage[i].style.backgroundImage = `url('/src/img/informe/profiles/profile${i}.jpg')`;
    }
}

profileImage[1].style.backgroundSize = '150px';

window.onload = profileImages();