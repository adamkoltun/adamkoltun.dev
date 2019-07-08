const topBar = document.querySelector('.top-bar');
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.mobile');

hamburger.addEventListener('click', () => {
    topBar.classList.toggle('on');
    navMobile.classList.toggle('on');
})

sal({
    once: false,
})