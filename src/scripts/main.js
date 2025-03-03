'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerElement(elem, parentElem) {
  const parentElemWidth = parentElem.clientWidth;
  const parentElemHeight = parentElem.clientHeight;
  const elemWidth = elem.clientWidth;
  const elemHeight = elem.clientHeight;

  const posLeft = `${(parentElemWidth - elemWidth) / 2}px`;
  const posTop = `${(parentElemHeight - elemHeight) / 2}px`;

  elem.style.left = posLeft;
  elem.style.top = posTop;
}

centerElement(spider, field);
