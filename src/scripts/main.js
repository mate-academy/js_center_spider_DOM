'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const wall = document.querySelector(".wall");
  const spider = document.querySelector(".spider");

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const spiderTop = (wallHeight - spiderHeight) / 2;
  const spiderLeft = (wallWidth - spiderWidth) / 2;

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
});
