const list = document.querySelector('.events-list');
const rectDiv = document.querySelector('.rect_div');
const rectP = document.querySelector('.rect_p');
const rectSpan = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

// Clear of the event-list
const clear = () => list.innerHTML = '';
clearBtn.addEventListener('click',clear);

// Remove handlers
const removeHandlers = () => {
  rectDiv.removeEventListener('click',logDiv);
  rectP.removeEventListener('click',logP);
  rectSpan.removeEventListener('click',logSpan);
  rectDiv.removeEventListener('click',logDivGrey, true);
  rectP.removeEventListener('click',logPGrey, true);
  rectSpan.removeEventListener('click',logSpanGrey, true);
}
removeHandlersBtn.addEventListener('click',removeHandlers);

// Attach handlers
const attachHandlers = () => {
  rectDiv.addEventListener('click',logDivGrey, true);
  rectDiv.addEventListener('click',logDiv);
  rectP.addEventListener('click',logPGrey, true);
  rectP.addEventListener('click',logP);
  rectSpan.addEventListener('click',logSpanGrey, true);
  rectSpan.addEventListener('click',logSpan);
}
attachHandlersBtn.addEventListener('click',attachHandlers);

// Handlers
const logElem = (color,text) => {
  list.innerHTML += `<span style='color: ${color}; margin-left: 8px'>${text}</span>`;
}

const logDiv = () => logElem('green','DIV');
const logP = () => logElem('green','P');
const logSpan = () => logElem('green','SPAN');

const logDivGrey = () => logElem('grey','DIV');
const logPGrey = () => logElem('grey','P');
const logSpanGrey = () => logElem('grey','SPAN');

rectDiv.addEventListener('click',logDivGrey, true);
rectDiv.addEventListener('click', logDiv);
rectP.addEventListener('click',logPGrey, true);
rectP.addEventListener('click',logP);
rectSpan.addEventListener('click',logSpanGrey, true);
rectSpan.addEventListener('click',logSpan);
