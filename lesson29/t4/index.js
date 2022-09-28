'use strict';

export const delay = (delay, callback, context, ...args) => {
  const func = callback.bind(context);
  setTimeout(() => func(args), delay);
}