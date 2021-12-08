'use strict';

const spyder = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const style = getComputedStyle(wall);
const spyderStyle = getComputedStyle(spyder);

spyder.style.height = '70px';

wall.style.height = '450px';
wall.style.width = '450px';
wall.style.border = '15px solid #e1e1e1';
wall.style.margin = '30px';
wall.style.backgroundImage = 'url(images/brick-wall.svg)';
wall.style.backgroundColor = '#efb685';

spyder.style.paddingLeft = `${parseInt(style.width)
   / 2 - parseInt(spyderStyle.width) / 2}px`;

spyder.style.paddingTop = `${parseInt(style.width)
   / 2 - parseInt(spyderStyle.width) / 2}px`;
