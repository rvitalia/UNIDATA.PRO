document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile_menu');
    if(burgerMenu && mobileMenu){
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('open');
           mobileMenu.classList.toggle('active'); 
        });
    }
   
});