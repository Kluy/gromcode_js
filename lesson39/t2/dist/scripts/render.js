function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.sort.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.regexp.exec.js";
import { getTasks } from './gateway.js';
export var renderTasks = function renderTasks() {
  var listElem = document.querySelector('.list');
  getTasks().then(function (result) {
    return result.sort(function (a, b) {
      return a.done - b.done || new Date(b.date) - new Date(a.date);
    }).map(function (_ref) {
      var task = _ref.task,
        done = _ref.done,
        id = _ref.id;
      var listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.setAttribute('data-id', id);
      var checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      var taskElem = document.createElement('span');
      taskElem.classList.add('list__item-task');
      taskElem.innerHTML = task;
      var deleteButton = document.createElement('button');
      deleteButton.classList.add('list__item-delete-button');
      deleteButton.innerHTML = '+';
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkboxElem, taskElem, deleteButton);
      return listItemElem;
    });
  }).then(function (result) {
    listElem.innerHTML = '';
    listElem.append.apply(listElem, _toConsumableArray(result));
  });
};