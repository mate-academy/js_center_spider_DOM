'use strict';

// write code here
function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Якщо елементи не знайдені — виходимо
  if (!wall || !spider) {
    return;
  }

  // Не змінюємо layout, якщо вже задане позиціонування
  const wallStyle = getComputedStyle(wall);

  if (wallStyle.position === 'static') {
    wall.style.position = 'relative';
  }

  spider.style.position = 'absolute';

  // Отримуємо положення та розміри контейнера
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // Розрахунок центру з урахуванням прокрутки (явне звернення до window)
  const leftPos = Math.round(
    wallRect.left +
      (wallRect.width - spiderRect.width) / 2 +
      window.pageXOffset,
  );
  const topPos = Math.round(
    wallRect.top +
      (wallRect.height - spiderRect.height) / 2 +
      window.pageYOffset,
  );

  // Встановлення координат
  spider.style.left = `${leftPos}px`;
  spider.style.top = `${topPos}px`;
}

// Центруємо після завантаження
window.addEventListener('load', () => {
  centerSpider();

  // Повторне центрування при зміні розміру
  window.addEventListener('resize', () => {
    requestAnimationFrame(centerSpider);
  });
});
