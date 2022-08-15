const btn = document.querySelector('.single-use-btn');
const log = () => {
    console.log('clicked');
    btn.removeEventListener('click', log);
}

btn.addEventListener('click', log);