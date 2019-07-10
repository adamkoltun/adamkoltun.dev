// Animations

sal({
    once: false,
})

// Mobile menu & hamburger

const topBar = document.querySelector('.top-bar');
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.mobile');

hamburger.addEventListener('click', () => {
    topBar.classList.toggle('on');
    navMobile.classList.toggle('on');
})

// Navigation

const nav = document.querySelectorAll('li a');

scrollTo = element => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
}

closeNav = () => {
    topBar.classList.remove('on');
    navMobile.classList.remove('on');
}

nav.forEach(anchor => {
    if (anchor.className === 'home') return
    else {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.getElementById(`${this.className}`);
            scrollTo(section);
            closeNav();
        })
    }
})