'use strict';

const element = document.querySelector('.spider');

element.style.position = 'absolute';
element.style.top = `50%`;
element.style.left = `50%`;
element.style.transform = `translate(-50%, -50%)`;


console.log(
  element.clientWidth,
  // 330 = 300 + 2 * 15 (padding-left and right)
  element.clientHeight,
  // 190 = 150 + 2 * 20 (padding-top and bottom)

  // В залежності від браузера та операційної системи може додаватися розмір смуги прокрутки
  element.offsetWidth,
  // 350 = 330 + 2 * 10 (border-left and right)
  element.offsetHeight,
  // 210 = 190 + 2 * 10 (border-top and bottom)

  element.scrollWidth,
  // 430 = 400 + 2 * 15 (.content width + padding-left and right)
  element.scrollHeight,
  // 640 = 600 + 2 * 20 (.content height + padding-top and bottom)
);
