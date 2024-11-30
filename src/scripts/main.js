'use strict';

// write code here
// Знайти елементи
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

// Прорахувати сентральну позицію

const leftPosition = (wall.offsetWidth - spider.offsetWidth) / 2;
const topPositon = (wall.offsetHeight - spider.offsetHeight) / 2;

// Поставити повука

spider.style.position = 'absolute';
spider.style.left = `${leftPosition}px`;
spider.style.top = `${topPositon}px`;
