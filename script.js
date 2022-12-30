const toggleButton=document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks=document.getElementsByClassName('right-item');
toggleButton.addEventListener('click', function(){
    for(var i=0; i<navbarLinks.length;i++)
    navbarLinks[i].classList.toggle('active');
});