'use strict';

// write code here
const containerDiv = document.querySelector('div');

containerDiv.classList.add('wall');

const containerImg = document.querySelector('img');

containerImg.classList.add('spider');

containerDiv.style.position = 'relative';
containerDiv.style.paddingLeft = '10px';
containerDiv.style.paddingTop = '10px';

containerImg.style.position = 'absolute';
containerImg.style.top = '50%';
containerImg.style.left = '50%';
containerImg.style.transform = 'translate(-50%, -50%)';

containerDiv.appendChild(containerImg);
