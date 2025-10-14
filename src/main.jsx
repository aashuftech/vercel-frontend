import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactDOM } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App/>
//   </StrictMode>,
// )

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
