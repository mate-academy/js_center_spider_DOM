'use strict';

const spider = document.getElementsByClassName('spider')[0];
const copyOfSpider = [...document.getElementsByClassName('spider')];
const copyOfWall = [...document.getElementsByClassName('wall')];

spider.style.top =
  (copyOfWall[0].clientHeight - copyOfSpider[0].clientHeight) / 2 + 'px';

spider.style.left =
  (copyOfWall[0].clientWidth - copyOfSpider[0].clientWidth) / 2 + 'px';

// write code here
