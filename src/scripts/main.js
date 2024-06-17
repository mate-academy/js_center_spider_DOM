'use strict';

const element = document.querySelector('.spider');
const conteiner = document.querySelector('.wall');

element.style.top = `${(conteiner.clientHeight - element.clientHeight) / 2}px`;
element.style.left = `${(conteiner.clientWidth - element.clientWidth) / 2}px`;
