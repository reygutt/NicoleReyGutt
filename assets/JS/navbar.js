function cancelIcon(x) {
    //toggle between classname menu and change in css
    x.classList.toggle("change");
}


//menudropdown
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navBar = document.getElementsByClassName('navbar')[0];
let navBarBackground = document.getElementById('navbar-background');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    navBarBackground.classList.toggle('navbarbackground');
    navBar.classList.toggle('activecolor');
    //navBar.style.backgroundColor = "#e1bbff"; //CHANGE BACKGROUNDCOLOR NAVBAR

});