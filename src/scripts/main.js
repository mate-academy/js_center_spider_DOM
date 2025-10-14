'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpiderInWall() {
  if (!wall || !spider) {
    return;
  }

  const wallComputed = window.getComputedStyle(wall).position;
  if (wallComputed === '' || wallComputed === 'static') {
    wall.style.position = 'relative';
  }

  // Павук повинен бути абсолютно позиціонований відносно стіни
  spider.style.position = 'absolute';

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderRect = spider.getBoundingClientRect();

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const leftPx = (wallWidth - spiderWidth) / 2;
  const topPx = (wallHeight - spiderHeight) / 2;

  spider.style.left = `${leftPx}px`;
  spider.style.top = `${topPx}px`;
}

/* Виконуємо після побудови DOM і теж при зміні розміру,
   щоб павук лишався по центру при ресайзі. */
window.addEventListener('DOMContentLoaded', () => {
  // Викликаємо в наступному кадрі, щоб браузер встиг відмалювати стиль/розміри
  requestAnimationFrame(centerSpiderInWall);
});

// Перерахунок при зміні розміру вікна
window.addEventListener('resize', () => {
  // Дрібний дебаунс, щоб не викликати надто багато обчислень під час ресайзу
  clearTimeout(window.__centerSpiderTimeout);
  window.__centerSpiderTimeout = setTimeout(() => {
    requestAnimationFrame(centerSpiderInWall);
  }, 80);
});
