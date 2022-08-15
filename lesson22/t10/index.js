const btns = document.querySelectorAll('.pagination__page');

const handleClick = (event) => {
    console.log(event.target.getAttribute('data-page-number'));
}

btns.forEach(elem => elem.addEventListener('click', handleClick))
