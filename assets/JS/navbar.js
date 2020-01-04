function cancelIcon(x) {
    //toggle between classname menu and change in css
    x.classList.toggle("change");
}


//menudropdown
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navBar = document.getElementsByClassName('navbar')[0];

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    navBar.classList.toggle('activecolor');
    //navBar.style.backgroundColor = "#e1bbff"; //CHANGE BACKGROUNDCOLOR NAVBAR

});