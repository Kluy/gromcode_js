const btns = document.querySelectorAll('.btn');
const handleClick = (event) => {
    console.log(event.target.textContent);
}

btns.forEach(elem => elem.addEventListener('click', handleClick))
