import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import './styles.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ReadMe from './app/pages/ReadMe/readMe';

const Main = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/readMe" element={<ReadMe />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
