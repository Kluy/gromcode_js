 export const squaredNumbers = () => {
    const elements = [...document.querySelectorAll('.number')];
    elements.map((elem) => {
        const num = elem.dataset.number
        elem.dataset.squaredNumber = num**2;
    })
}