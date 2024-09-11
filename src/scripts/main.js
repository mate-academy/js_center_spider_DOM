'use strict';

// write code here
const centeringContainer = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centering(container, element) {
  const containerCenterX = container.clientWidth / 2;
  const containerCenterY = container.clientHeight / 2;
  const elementCenterX = element.clientWidth / 2;
  const elementCenterY = element.clientHeight / 2;

  element.style.left = `${containerCenterX - elementCenterX}px`;
  element.style.top = `${containerCenterY - elementCenterY}px`;
}

centering(centeringContainer, spider);
