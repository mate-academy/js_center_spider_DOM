'use strict';

// const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');
const wallForPosition = spider.offsetParent;

spider.style.top = `
  ${(wallForPosition.clientHeight / 2)
    - (spider.height / 2)
}px`;

spider.style.left = `
  ${(wallForPosition.clientWidth / 2)
  - (spider.width / 2)
}px`;
