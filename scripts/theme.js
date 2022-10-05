function darkModeSwitch(){
    const darkModeButton = document.querySelector('.mode-switch');
    const html = document.querySelector('html');

    darkModeButton.addEventListener('click', () => {
        html.classList.toggle('dark-mode');
        darkModeButton.classList.toggle('light-icon');
        darkModeButton.classList.toggle('dark-icon');
    });

    const darkModeFix = document.localStorage.getItem('darkmode');

    if (!darkModeFix){
        localStorage.setItem('darkmode', true);
    }
    if (darkModeFix){
        localStorage.removeItem('darkmode');
    }
}

darkModeSwitch();
