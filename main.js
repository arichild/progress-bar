const section = document.querySelector('section');
const progressBar = document.querySelector('#progress-bar');
const btn = document.getElementById('theme');
const btntoTop = document.querySelector('.up');

btntoTop.addEventListener('click', toTop);

function toTop() {
    window.scrollTo(0, 0);
}

btn.addEventListener('click', changeTheme);

function changeTheme() {
    const getClass = btn.getAttribute('class');

    if(getClass === 'dark') {
        btn.classList.remove('dark');
        btn.classList.add('light');
        localStorage.setItem('btn', 'light');

        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');

        btn.textContent = 'DARK';
        localStorage.setItem('text', 'DARK');
    } else if(getClass === 'light') {
        btn.classList.remove('light');
        btn.classList.add('dark');
        localStorage.setItem('btn', 'dark');

        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');

        btn.textContent = 'LIGHT';
        localStorage.setItem('text', 'LIGHT');
    }

    document.body.style.transition = 'all 1s';
}

window.onload = checkTheme();

function checkTheme() {
    const localStorageTheme = localStorage.getItem('theme');
    const localStorageBtn = localStorage.getItem('btn');
    const localStorageText = localStorage.getItem('text');

    if (localStorageTheme !== null && localStorageTheme === 'light') {
        document.body.className = localStorageTheme;
        btn.classList = localStorageBtn;
        btn.textContent = localStorageText;
    }
}

const animateProgressBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth);

    progressBar.style.width = value + '%';

    if(value < 0){
        progressBar.style.width = '0%';
    }
}

window.addEventListener('scroll', animateProgressBar);