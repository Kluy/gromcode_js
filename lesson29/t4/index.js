'use strict';

export const delay = (delay, callback, context, ...args) => {
  setTimeout(() => callback.bind(context)(args), delay);
}