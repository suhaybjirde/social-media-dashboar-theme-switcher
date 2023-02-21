const themeChanger = document.querySelector('.theme-switcher');
const circle = document.querySelector('.circle');
const root = document.querySelector(":root");

function lightTheme() {
    root.style.setProperty('--clr-primary-700', 'hsl(230, 22%, 74%)')
    root.style.setProperty('--clr-neutral-100', 'hsl(0, 0%, 100%)')
    root.style.setProperty('--clr-neutral-200', 'hsl(225, 100%, 98%)')
    root.style.setProperty('--clr-neutral-300', 'hsl(227, 47%, 96%)')
    root.style.setProperty('--clr-neutral-350', 'hsl(227, 47%, 86%)')
    root.style.setProperty('--clr-neutral-400', 'hsl(228, 12%, 44%)')
    root.style.setProperty('--clr-neutral-500', 'hsl(230, 17%, 14%)')
}

function darkTheme() {
    root.style.setProperty('--clr-primary-700', 'linear-gradient(90deg, hsl(210, 78%, 56%),hsl(146, 68%, 55%))')
    root.style.setProperty('--clr-neutral-100', 'hsl(230, 17%, 14%)')
    root.style.setProperty('--clr-neutral-200', 'hsl(232, 19%, 15%)')
    root.style.setProperty('--clr-neutral-300', 'hsl(228, 28%, 20%)')
    root.style.setProperty('--clr-neutral-350', 'hsl(228, 28%, 30%)')
    root.style.setProperty('--clr-neutral-400', 'hsl(228, 34%, 66%)')
    root.style.setProperty('--clr-neutral-500', 'hsl(0, 0%, 100%)')
}



themeChanger.addEventListener('click', ()=> {
    circle.classList.toggle('lightTheme')
    if (circle.classList.contains('lightTheme')) {
        lightTheme()
    }
    else {
        darkTheme()
    }
})
