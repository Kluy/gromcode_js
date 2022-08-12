export const finishList = () => {
    const list = document.querySelector('.list');
    const special = document.querySelector('.special');
    const listItem = document.createElement('li');
    const listItem1 = document.createElement('li');
    const listItem2 = document.createElement('li');
    const listItem3 = document.createElement('li');
    listItem.textContent = 1;
    listItem1.textContent = 4;
    listItem2.textContent = 6;
    listItem3.textContent = 8;
    list.append(listItem3);
    list.prepend(listItem);   
    special.before(listItem1);
    special.after(listItem2);
}