'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// const wallStyles = getComputedStyle(wall);
// const spiderStyles = getComputedStyle(spider);

// const wallHeight = parseFloat(wallStyles.height);
// const wallWidth = parseFloat(wallStyles.width);

// const spiderHeigth = parseFloat(spiderStyles.height);
// const spiderWidth = parseFloat(spiderStyles.width);

// spider.style.top = wallHeight / 2 - spiderHeigth / 2 + 'px';
// spider.style.left = wallWidth / 2 - spiderWidth / 2 + 'px';

spider.style.position = 'static';

wall.style.display = 'flex';
wall.style.justifyContent = 'center';
wall.style.alignItems = 'center';
