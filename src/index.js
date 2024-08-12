import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './Homepage';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Homepage />
    <About />
    <Skills />
    <Project />
    <Contact />
  </React.StrictMode>
);


reportWebVitals();
