import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import './styles.scss';

const rootElem = document.querySelector('#root');
const author = {
  name: 'Tom',
  avatarUrl: 'https://avatars3.githubusercontent.com/u10001',
};

ReactDOM.render(
  <Comment author={author} text="comment" date={new Date()} />,
  rootElem
);
