import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//nodemon index.js to run
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
to check for sql changes made in terminal:
sudo su postgres
psql
\c misk_info
SELECT * FROM users;


other useful commands:
\l ->list all databases
\q to exit

*/