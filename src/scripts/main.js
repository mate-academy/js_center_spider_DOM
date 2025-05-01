'use strict';

// Крок 1: Отримання елементів
const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

// Перевірка, чи елементи знайдено (добра практика)
if (wallElement && spiderElement) {
  // Крок 2: Отримання розмірів елементів
  const wallWidth = wallElement.clientWidth;
  const wallHeight = wallElement.clientHeight;
  const spiderWidth = spiderElement.offsetWidth;
  const spiderHeight = spiderElement.offsetHeight;

  // Крок 3: Розрахунок координат для центрування
  // Можна розрахувати без проміжних змінних xWall, yWall
  const spiderLeft = wallWidth / 2 - spiderWidth / 2;
  const spiderTop = wallHeight / 2 - spiderHeight / 2;

  // Крок 4: Застосування розрахованих координат (з одиницями 'px')
  spiderElement.style.left = spiderLeft + 'px';
  spiderElement.style.top = spiderTop + 'px';
}
