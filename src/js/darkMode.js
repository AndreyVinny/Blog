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