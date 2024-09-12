'use strict';

const spider = document.querySelector('.spider');
const wall = spider.offsetParent;

const coordinates = function(
  offsets = 'clientWidth',
  firstEl = wall,
  secondEl = spider) {
  const divinity = (offset = offsets, numb = 2) => {
    return (firstEl[offset] / numb - secondEl[offset] / numb);
  };

  return {
    x: `${divinity()}px`,
    y: `${divinity('clientHeight')}px`,
  };
};

const { x, y } = coordinates();

spider.style.top = y;
spider.style.left = x;
