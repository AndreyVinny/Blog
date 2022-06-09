const loader = document.querySelector('.load');

window.addEventListener('load', () => {
    loader.classList.add('hidden');
})
let side1 = document.getElementById('side1');
let side2 = document.getElementById('side2');

window.addEventListener('scroll',function(){
    side1.style.left = -window.pageYOffset+'px';
    side2.style.left = window.pageYOffset+'px';
})

let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('.dark_mode');

const enableDarkMode = () => {
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
}

const disableleDarkMode = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', null);
}

if(darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    darkMode !== 'enabled' ? enableDarkMode() : disableleDarkMode();
})