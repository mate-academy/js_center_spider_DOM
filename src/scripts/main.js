'use strict';

// 1. Знаходимо стіну та павука за класами
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

/**
 * Функція для центрування павука
 */
function centerSpider() {
  if (!wall || !spider) {
    return;
  }

  // 2. Отримуємо ширину та висоту стіни (внутрішню частину)
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  // 3. Отримуємо розміри самого павука
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // 4. Розраховуємо координати для центру
  // Формула: (ШиринаСтіни - ШиринаПавука) / 2
  const xCenter = (wallWidth - spiderWidth) / 2;
  const yCenter = (wallHeight - spiderHeight) / 2;

  // 5. Застосовуємо розраховані значення до інлайнових стилів
  spider.style.left = `${xCenter}px`;
  spider.style.top = `${yCenter}px`;
}

// Викликаємо функцію для виконання
centerSpider();
