export const getSection = (num) => {
    const spanElement = document.querySelector(`[data-number="${num}"]`);
    return spanElement.parentElement.dataset.section
}