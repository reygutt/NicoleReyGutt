//DISAPPEAR AND APPEAR of elements (logo, menu, text)

let logoAnimation = document.getElementById('logo');
let containerLogo = document.getElementById('logo-disappear');
let introText = document.getElementsByClassName('intro-text')[0];




containerLogo.addEventListener('click', function (){
    logoAnimation.style.display="none";
    introText.classList.add('intro-text-animation');
    introText.style.opacity='1';

});