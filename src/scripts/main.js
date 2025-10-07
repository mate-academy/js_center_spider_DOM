'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Перевірка, що елементи знайдені
  if (!wall || !spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const topPx = wallRect.height / 2 - spiderRect.height / 2;
  const leftPx = wallRect.width / 2 - spiderRect.width / 2;

  spider.style.top = `${topPx}px`;
  spider.style.left = `${leftPx}px`;
}

// Виконуємо після повного завантаження сторінки (зображень теж)
window.addEventListener('load', () => {
  centerSpider();
});

// Оптимізований виклик при зміні розміру
let resizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(centerSpider, 150); // debounce на 150мс
});

// fuck a ai buddy, u are fucking pidoras
