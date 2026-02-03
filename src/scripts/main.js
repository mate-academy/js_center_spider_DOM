'use strict';
'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function center() {
  // 1. Контейнер МАЄ бути relative, щоб absolute працював відносно нього
  wall.style.position = 'relative';

  // 2. Використовуємо внутрішні розміри стіни та повні розміри павука
  // clientWidth/Height повертають розмір без рамок
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // 3. Якщо павук ще не завантажився (розмір 0), чекаємо далі
  if (spiderWidth === 0 || spiderHeight === 0) {
    return;
  }

  // 4. Обчислюємо позицію
  const topPos = (wallHeight - spiderHeight) / 2;
  const leftPos = (wallWidth - spiderWidth) / 2;

  // 5. Застосовуємо стилі
  spider.style.position = 'absolute';
  spider.style.top = `${topPos}px`;
  spider.style.left = `${leftPos}px`;
}

// Викликаємо функцію відразу
center();

// Додатково перестраховуємось на випадок затримки завантаження зображення
spider.addEventListener('load', center);
window.addEventListener('load', center);
