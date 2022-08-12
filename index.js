const timer = {
  // put your code here
  secondsPassed: 0,
  minsPassed: 0,
  timerID: 0,
  startTimer() {
    this.timerID = setInterval(() => {
      this.secondsPassed++;
      if (this.secondsPassed === 60) {
        this.minsPassed++;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  getTime() {
    console.log(this.minsPassed + ':' + (String)(this.secondsPassed).padStart(2,0));
    return this.minsPassed + ':' + (String)(this.secondsPassed).padStart(2,0);
    // return this.secondsPassed < 10
    //   ? `${this.minsPassed}:0${this.secondsPassed}`
    //   : `${this.minsPassed}:${this.secondsPassed}`;

  },
  stopTimer() {
    clearInterval(this.timerID);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// timer.startTimer();

// setInterval(() => {
//   timer.getTime() 
//  }, 1000);

// setTimeout(() => {
//   timer.resetInterval() 
//  }, 3000);


// setTimeout(() => {
//   timer.stopTimer() 
//  }, 12000);

//  setTimeout(() => {
//   timer.startTimer() 
//  }, 15000);

//  setTimeout(() => {
//   timer.resetInterval() 
//  }, 18000);

//  setTimeout(() => {
//   timer.stopTimer() 
//  }, 20000);