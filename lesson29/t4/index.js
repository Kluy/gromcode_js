'use strict';

export const delay = (delay, callback, context, ...args) => {
  setTimeout(() => callback(context, args), delay);
}