// import { initializeCounter } from './counter.js'

// initializeCounter()

import('./counter.js').then(({ initializeCounter }) => {
  initializeCounter();
});

document.querySelector('h2').textContent = 'Hello Vite!';
