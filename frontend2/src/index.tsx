// declare global {
//   interface Window {
//     google: {
//       maps: {
//         Map: any; // O cualquier tipo más específico que necesites
//         Marker: any; // O cualquier tipo más específico que necesites
//       };
//     };
//   }
// };

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './app'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
