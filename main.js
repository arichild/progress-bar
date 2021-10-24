const section = document.querySelector('section');
const progressBar = document.querySelector('#progress-bar');
const btn = document.querySelector('.light');
const btntoTop = document.querySelector('.up')

btn.addEventListener('click', changeTheme);

function changeTheme() {
    const getClass = btn.getAttribute('class');

    if(getClass === 'light') {
        btn.setAttribute('class', 'dark');
        btntoTop.setAttribute('class', 'toTop dark');
        btn.textContent = 'DARK';

        document.body.style.backgroundColor = '#fff';
        section.style.color = 'black';
    } else if(getClass === 'dark') {
        btn.setAttribute('class', 'light');
        btntoTop.setAttribute('class', 'toTop');
        btn.textContent = 'LIGHT';

        document.body.style.backgroundColor = '#242423';
        section.style.color = 'white';
    }

    localStorage.getItem('class');

    document.body.style.transition = 'all 1.2s';
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

btntoTop.addEventListener('click', toTop);

function toTop() {
    window.scrollTo(0, 0);
    document.body.style.transition = 'all 1.2s';
}