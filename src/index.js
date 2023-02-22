// Louice Rydén

import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './Board';
import Cell from './Cell';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);
