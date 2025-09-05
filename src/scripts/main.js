'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');

  if (!wall) {
    // console.warn('Елемент .wall не знайдено в DOM');

    return;
  } else {
    wall.style.position = wall.style.position || 'relative';
  }

  const spider = document.querySelector('.spider');

  if (!spider) {
    // console.warn('Елемент .spider не знайдено в DOM');

    return;
  } else {
    spider.style.position = 'absolute';
  }

  function recenter() {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const wallWidth = wallRect.width;
    const wallHeight = wallRect.height;
    const spiderWidth = spiderRect.width;
    const spiderHeight = spiderRect.height;

    if (
      wallWidth === 0 ||
      wallHeight === 0 ||
      spiderWidth === 0 ||
      spiderHeight === 0
    ) {
      // console.warn('Розміри елементів дорівнюють 0, центрування неможливе');

      return;
    }

    const left = (wallWidth - spiderWidth) / 2;
    const top1 = (wallHeight - spiderHeight) / 2;

    spider.style.position = 'absolute'; // Гарантуємо absolute позиціонування
    spider.style.left = `${left}px`;
    spider.style.top = `${top1}px`;
  }

  // Центрування після завантаження зображення (якщо spider є img)
  if (spider.tagName === 'IMG') {
    if (spider.complete) {
      recenter();
    } else {
      spider.addEventListener('load', recenter);
    }
  } else {
    recenter(); // Центрування, якщо це не зображення
  }

  // Оновлення при зміні розміру вікна
  window.addEventListener('resize', recenter);
});
