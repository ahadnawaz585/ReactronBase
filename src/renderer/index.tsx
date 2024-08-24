import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

import './styles.css';
import './index.scss';

const Main = () => {
  return <>
    <App />
  </>;
};

ReactDOM.render(<Main />, document.getElementById('root'));
