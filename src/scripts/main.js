'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderBox = document.createElement('div');

wall.style.display = 'flex';
wall.style.alignItems = 'center';
wall.style.justifyContent = 'center';

spider.style.position = 'static';

wall.append(spiderBox);
spiderBox.append(spider);
