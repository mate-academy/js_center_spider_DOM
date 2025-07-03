'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function calculateCenter(container, obj) {
  const neededTop = container.clientHeight / 2;
  const neededLeft = container.clientWidth / 2;

  obj.style.top = `${neededTop - obj.clientHeight / 2}px`;
  obj.style.left = `${neededLeft - obj.clientWidth / 2}px`;
}

calculateCenter(wall, spider);
