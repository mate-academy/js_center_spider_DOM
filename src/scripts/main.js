'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallStyle = getComputedStyle(wall);
const spiderStyle = getComputedStyle(spider);

spider.style.top = `
${parseInt(wallStyle.height) / 2 - parseInt(spiderStyle.height) / 2}px
`;

spider.style.left = `
${parseInt(wallStyle.width) / 2 - parseInt(spiderStyle.width) / 2}px
`;
