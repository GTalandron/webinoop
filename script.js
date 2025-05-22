var typed = new Typed(".input", {
    strings: ["Computer Engineering Student", "Software Engineer in the making", "first year college student from NCST"],
    typedSpeed: 1000,
    backspeed: 1000,
    loop: true
})

const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.navlinks');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


