'use strict';

// write code here
const $spiderElement = document.querySelector('img.spider');
const $wallElement = document.querySelector('div.wall');

const spiderBoundingRect = $spiderElement.getBoundingClientRect();

$spiderElement.style.left = `${($wallElement.clientWidth - spiderBoundingRect.width) / 2}px`;
$spiderElement.style.top = `${($wallElement.clientHeight - spiderBoundingRect.height) / 2}px`;
