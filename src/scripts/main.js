'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerElement(outer, inner) {
  inner.style.top = (outer.clientHeight - inner.clientHeight) / 2 + 'px';
  inner.style.left = (outer.clientWidth - inner.clientWidth) / 2 + 'px'
}

centerElement(wall, spider);
