// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef
const formFields = [...new FormData(formElem)];
// formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

const formData = formFields.reduce(function (acc, formField) {
  const prop = formField[0]; // здесь "name" инпута
  const value = formField[1]; // здесь "value" инпута
  // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
  // const [prop, value] = formField;
  return {
    // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
    ...acc,
    // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
    [prop]: value,
  };
}, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));
