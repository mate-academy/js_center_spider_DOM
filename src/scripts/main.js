'use strict';
// викликаємо функцію, коли вікно повністю завантажиться (всі картинки на місці)

window.centerSpider = () => {
  // СПОЧАТКУ шукаємо елементи, щоб було що перевіряти
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // ТЕПЕР робимо перевірка наявності
  if (!wall || !spider) {
    return;
  }

  // встановлюємо правила позиціонування:
  wall.style.position = 'relative';

  // робимо стіну контейнером, відносно якої пересув.павук
  spider.style.position = 'absolute';

  // вимірюємо поточну ширину та висоту елементів (враховуючи відступи)
  // для стіни використовуємо clientWidth,
  // щоб не враховувати товщину рамок (border)
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  // рахуємо координати за формулою: (РозмірСтіни - РозмірПавука) / 2
  // щоб залишити рівну кількість вільного місця з обох боків
  const left = (wallWidth - spiderWidth) / 2;
  const topPos = (wallHeight - spiderHeight) / 2;

  // записуємо розраховані значення у CSS властивості павука
  // додаємо 'px', щоб браузер розумів одиниці виміру
  spider.style.left = `${left}px`;
  spider.style.top = `${topPos}px`;
};

// Викликаємо функцію при завантаженні (для звичайної роботи)
window.addEventListener('load', window.centerSpider);

// Також можна додати на resize, щоб павук не тікав
window.addEventListener('resize', window.centerSpider);
