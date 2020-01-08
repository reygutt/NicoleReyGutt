//DISAPPEAR AND APPEAR of elements (logo, menu, text)

let logoAnimation = document.getElementById('logo');
let containerLogo = document.getElementById('logo-disappear');
let introText = document.getElementsByClassName('intro-text')[0];


//option 1: after 6 seconds display text
//option 2: after clicking display text and hide logo


function clickedShowText(){
    logoAnimation.style.display="none";
    introText.classList.add('intro-text-animation');
    introText.style.opacity='1';
}

// window.setTimeout(clickedShowText(), 6000);
$("#logo path:nth-child(1)").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
    logoAnimation.style.display="none";
    introText.classList.add('intro-text-animation');
    introText.style.opacity='1';
});

containerLogo.addEventListener('click', function (){
    clickedShowText();
});
