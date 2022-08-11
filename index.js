export const timer = {
  // put your code here
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    setInterval(() => {
      this.secondsPassed++;
      if (this.secondsPassed === 60) {
        this.minsPassed++;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  getTime() {
    return this.secondsPassed <= 9
      ? `${this.minsPassed}:0${this.secondsPassed}`
      : `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer(timerID) {
    clearInterval(timerID);
  },
  resetInterval() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};