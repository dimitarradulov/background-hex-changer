'use strict';

// Elements
const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const hexValue = document.querySelector('.hex');

let hexCode = 'ffffff';

const hexadecimals = [
  3,
  'b',
  'd',
  5,
  1,
  6,
  'e',
  9,
  'a',
  0,
  'c',
  4,
  7,
  'f',
  2,
  8,
];

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Event handlers
btn.addEventListener('click', () => {
  hexCode = hexCode
    .split('')
    .map((char) => {
      char = hexadecimals[randomIntFromInterval(0, hexadecimals.length - 1)];
      return char;
    })
    .join('');

  const finalHexValue = '#' + hexCode;

  body.style.backgroundColor = finalHexValue;

  hexValue.textContent = finalHexValue;

  hexValue.classList.remove('hidden');
});
