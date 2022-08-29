// export
 const getSection = (num) => {
    const spanElement = document.querySelector(`span[data-number="${num}"]`);
    return spanElement.parentElement.dataset.section
}