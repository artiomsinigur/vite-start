// import { initializeCounter } from './counter.js'

import image from './android-chrome-512x512.png';
// import image from './favicon-16x16.png';

const imageElm = document.createElement('img');
imageElm.src = image;
document.getElementById('content').appendChild(imageElm);

import('./counter.js').then(({ initializeCounter }) => {
  initializeCounter();
});

document.querySelector('h2').textContent = 'Hello Vite!';
