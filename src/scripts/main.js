'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const leftPosition = (wallWidth - spiderWidth) / 2;
const topPosition = (wallHeight - spiderHeight) / 2;

spider.style.left = `${parseFloat(leftPosition)}px`;
spider.style.top = `${parseFloat(topPosition)}px`; ;

spider.style.transition = 'all 2s ease-in-out';

const messageBox = document.createElement('div');

messageBox.classList.add('message-box');
wall.appendChild(messageBox);

messageBox.style.cssText = `
position: absolute;
background-color: white;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 5px;
opacity: 0;
transition: opacity 1s ease-in-out;
`;

setTimeout(() => {
  messageBox.textContent = 'I`m spiderman!';
  messageBox.style.opacity = 1;
}, 2000);
