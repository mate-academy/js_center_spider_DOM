'use strict';
// викликаємо функцію, коли вікно повністю завантажиться (всі картинки на місці)

window.addEventListener('load', () => {
  // СПОЧАТКУ шукаємо елементи, щоб було що перевіряти
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // ТЕПЕР робимо перевірку наявності
  if (!wall || !spider) {
    return;
  }

  // встановлюємо правила позиціонування:
  wall.style.position = 'relative';

  // робимо стіну контейнером, відносно якої пересув.павук
  spider.style.position = 'absolute';

  // вимірюємо поточну ширину та висоту елементів (враховуючи відступи)
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  // рахуємо координати за формулою: (РозмірСтіни - РозмірПавука) / 2
  // щоб залишити рівну кількість вільного місця з обох боків
  const left = (wallWidth - spiderWidth) / 2;
  const topPos = (wallHeight - spiderHeight) / 2;

  // записуємо розраховані значення у CSS властивості павука
  // додаємо 'px', щоб браузер розумів одиниці виміру
  spider.style.left = `${left}px`;
  spider.style.top = `${topPos}px`;
});
