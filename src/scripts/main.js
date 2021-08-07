'use strict';

const el = document.querySelector('.spider');
const elH = el.offsetHeight;
const elW = el.offsetWidth;

el.style.top = '50%';
el.style.marginTop = -(elH / 2) + 'px';
el.style.left = '50%';
el.style.marginLeft = -(elW / 2) + 'px';
