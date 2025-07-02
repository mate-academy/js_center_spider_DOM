'use strict';

const padTop =
  document.querySelector('.wall').clientHeight / 2 -
  document.querySelector('.spider').clientHeight / 2;

const padLeft =
  document.querySelector('.wall').clientWidth / 2 -
  document.querySelector('.spider').clientWidth / 2;

const spider = document.querySelector('.spider');

spider.style.top = `${padTop}px`;
spider.style.left = `${padLeft}px`;
