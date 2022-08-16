const arena = document.querySelector('.arena');

const arrMaker = (from, to) => {
const arr = []
for(let i = from; i <= to; i++)
arr.push(i);
  return arr;
}

const sectorMaker = (from, to) => arrMaker(from, to)
  .map((elem) => `<div class="sector" data-sector-number="${elem}">${lineMaker(1, 10)}</div>`).join('');

const lineMaker = (from, to) => arrMaker(from, to)
  .map((elem) => `<div class="sector__line" data-line-number="${elem}">${seatMaker(1, 10)}</div>`).join('');

const seatMaker = (from, to) => arrMaker(from, to)
  .map((elem) => `<div class="sector__seat" data-seat-number="${elem}"></div>`).join('');

arena.innerHTML += sectorMaker(1, 3);

const getSeat = (event) => {
if(!event.target.classList.contains('sector__seat'))
  return null;

  const selectedSeat = document.querySelector('.board__selected-seat');
  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;
  selectedSeat.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
}

arena.addEventListener('click', getSeat);
