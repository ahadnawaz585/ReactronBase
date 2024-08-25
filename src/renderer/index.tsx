import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './app/app';

import './styles.css';
import './index.scss';

const Main = () => {
  return <>
     <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </>;
};

ReactDOM.render(<Main />, document.getElementById('root'));
