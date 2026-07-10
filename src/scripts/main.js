'use strict';

// Находим элемент стены по ее классу '.wall'
const wall = document.querySelector('.wall');

// Находим элемент паука по его классу '.spider'
const spider = document.querySelector('.spider');

// Проверяем, что оба элемента успешно найдены в DOM дереве
if (wall && spider) {
  // Вычисляем X: делим ширину стены пополам
  // и вычитаем половину ширины самого паука
  const centerX = wall.clientWidth / 2 - spider.clientWidth / 2;

  // Вычисляем Y: делим высоту стены пополам
  // и вычитаем половину высоту самого паука
  const centerY = wall.clientHeight / 2 - spider.clientHeight / 2;

  // Сдвигаем паука по горизонтали, добавляя 'px'
  spider.style.left = `${centerX}px`;

  // Сдвигаем паука по вертикали, добавляя 'px'
  spider.style.top = `${centerY}px`;
}
