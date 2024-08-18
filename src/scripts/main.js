'use strict';

const spider = document.querySelector('.spider');

function positionCenter(element) {
  element.style.top = '50%';
  element.style.left = '50%';
  element.style.transform = 'translateY(-50%) translateX(-50%)';
}

positionCenter(spider);
