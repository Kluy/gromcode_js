export const compose = (...functions) => value => {
    return functions.reduce((acc, func) => func(acc), value);
};