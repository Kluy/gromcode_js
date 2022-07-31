const callbackPrompt = {
  message: 'Введите свой номер телефона',
  showPrompt(){
    console.log(prompt(this.message));
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms)
  }
}



callbackPromt.showDeferredPrompt(4000);