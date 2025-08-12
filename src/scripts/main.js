'use strict';

function spiderPosition(element, container) {
  // Проверка наличия элементов
  if (!element || !container) {
    return;
  }

  // Получение размеров
  const { clientHeight: cH, clientWidth: cW } = container;
  const { clientHeight: eH, clientWidth: eW } = element;

  // Вычисление центра
  const topPos = (cH - eH) / 2;
  const leftPos = (cW - eW) / 2;

  // Установка стилей
  container.style.position = 'relative';
  element.style.position = 'absolute';
  element.style.top = `${topPos}px`;
  element.style.left = `${leftPos}px`;
}

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spiderPosition(spider, wall);
