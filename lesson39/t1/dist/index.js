import "core-js/modules/es.array.flat.js";
import "core-js/modules/es.array.unscopables.flat.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.promise.finally.js";
// file path: src/index.js

const data = [1, 2, [3, 4, [5, 6]]];
const result = data.flat(2);
console.log(result);
Promise.resolve().finally();