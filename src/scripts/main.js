'use strict';

const centring = (container, element) => {
  const coordContainer = container.getBoundingClientRect();
  const coordElement = element.getBoundingClientRect();

  const topPosition = (coordContainer.height - coordElement.height) / 2;
  const leftPosition = (coordContainer.width - coordElement.width) / 2;

  element.style.top = `${topPosition}px`;
  element.style.left = `${leftPosition}px`;
};

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

centring(wall, spider);
