const rootElement = document.querySelector('#root');

const newElem = React.createElement('div', { className: 'greeting' }, [
  React.createElement('h1', { className: 'greeting__title' }, 'Hello, world!'),
  React.createElement(
    'p',
    { className: 'greeting__text' },
    "I'm learning React"
  ),
]);

ReactDOM.render(newElem, rootElement);
