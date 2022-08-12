export const finishForm = () => {
    const form = document.querySelector('.login-form');
    const input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('name','login');
    document.querySelector('[name=password]').setAttribute('type','password');
    form.prepend(input);
}