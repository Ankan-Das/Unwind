// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Wait for the container element to be available
const container = document.getElementById('teleparty-extension-root');
console.log("Container in index.js:", container);

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.error("Container not found. Make sure the content script runs on this page.");
}
