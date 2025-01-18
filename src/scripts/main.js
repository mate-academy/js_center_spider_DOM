'use strict';

const spider = document.querySelector('.spider');

function centerElem(elem) {
  elem.style.top = '50%';
  elem.style.left = '50%';
  elem.style.transform = 'translate(-50%, -50%)';
}

centerElem(spider);
