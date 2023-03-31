'use strict';

const spiderMan = document.querySelector('.spider');
const wall = document.querySelector('.wall');

function mooveSpider(spider, place) {
  const halfBody = spider.clientWidth / 2;

  spider.style.left = place.clientWidth / 2 - halfBody + 'px';
  spider.style.top = place.clientHeight / 2 - halfBody + 'px';
}

mooveSpider(spiderMan, wall);
