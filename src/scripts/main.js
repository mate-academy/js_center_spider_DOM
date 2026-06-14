'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.left = `${wall.clientWidth / 2 - spider.clientWidth / 2}px`;
spider.style.top = `${wall.clientHeight / 2 - spider.clientHeight / 2}px`;

// const straight = document.querySelector('.straight');
// const right = document.querySelector('.right');
// const left = document.querySelector('.left');
// const back = document.querySelector('.back');

// straight.addEventListener('click', () => {
//   spider.style.top = `${Number.parseInt(spider.style.top) - 50}px`;
// });

// back.addEventListener('click', () => {
//   spider.style.top = `${Number.parseInt(spider.style.top) + 50}px`;
// });

// right.addEventListener('click', () => {
//   spider.style.left = `${Number.parseInt(spider.style.left) + 50}px`;
// });

// left.addEventListener('click', () => {
//   spider.style.left = `${Number.parseInt(spider.style.left) - 50}px`;
// });
