// animate the navbar links on page load
const navLinks = document.querySelectorAll('.navbar-nav li');

for (let i = 0; i < navLinks.length; i++) {
    setTimeout(() => {
        navLinks[i].style.opacity = '1';
    }, 300 * i);
}

// animate the contact form on page scroll
const formElements = document.querySelectorAll('.form-control');

window.addEventListener('scroll', () => {
    for (let i = 0; i < formElements.length; i++) {
        const elementPosition = formElements[i].getBoundingClientRect().top;
        const windowPosition = window.innerHeight / 1.5;

        if (elementPosition < windowPosition) {
            formElements[i].style.opacity = '1';
        }
    }
});
