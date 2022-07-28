'use strict';

const spider = document.querySelector('.spider');
// const wall = document.querySelector('.wall');

// console.log(spider.clientWidth)

spider.style.top = '50%';
spider.style.marginTop = -spider.offsetHeight / 2 + 'px';
spider.style.marginLeft = -spider.offsetWidth / 2 + 'px';
spider.style.left = '50%';

// console.log(spider.offsetTop, spider.offsetRight)
