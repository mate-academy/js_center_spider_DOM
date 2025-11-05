'use strict';

const container = document.querySelector('.wall');
const elem = document.querySelector('.spider');

container.style.position = 'relative';
elem.style.position = 'absolute';

const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const elemWidth = elem.offsetWidth;
const elemHeight = elem.offsetHeight;

const sizeTop = (containerHeight - elemHeight) / 2;
const sizeLeft = (containerWidth - elemWidth) / 2;

elem.style.top = `${sizeTop}px`;
elem.style.left = `${sizeLeft}px`;
