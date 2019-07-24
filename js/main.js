// Mobile menu & hamburger

const topBar = document.querySelector('.top-bar');
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.mobile');

hamburger.addEventListener('click', () => {
    topBar.classList.toggle('on');
    navMobile.classList.toggle('on');
    document.body.classList.toggle('close')
})

// Hide top-bar

let prevScrollPosition = window.pageYOffset;

window.onscroll = () => {
    currentScrollPosition = window.pageYOffset;
    if (prevScrollPosition > currentScrollPosition) {
        topBar.style.transform = 'translateY(0)';
    } else {
        topBar.style.transform = 'translateY(-100%)';
    }
    prevScrollPosition = currentScrollPosition;
}

// Navigation

const nav = document.querySelectorAll('li a');

const takeRightOffsetTop = section => section.className === 'projects' ? section.offsetTop : section.offsetTop - 45;

scrollToSection = section => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: takeRightOffsetTop(section)
    });
}

closeNav = () => {
    topBar.classList.remove('on');
    navMobile.classList.remove('on');
    document.body.classList.remove('close');
}

nav.forEach(anchor => {
    if (anchor.className === 'home') return
    else {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.getElementById(`${this.className}`);
            scrollToSection(section);
            closeNav();
        })
    }
})