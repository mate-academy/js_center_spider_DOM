'use strict';

'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Отримуємо розміри контейнера і павука
const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

// Обчислюємо координати для центру
const left = (wallRect.width - spiderRect.width) / 2;
const offsetTop = (wallRect.height - spiderRect.height) / 2;

// Призначаємо павуку абсолютне позиціонування та координати
spider.style.position = 'absolute';
spider.style.left = `${left}px`;
spider.style.top = `${offsetTop}px`;
