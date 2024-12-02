'use strict';

const wall = document.querySelector('.wall');
const HALF_WALL_HEIGHT = wall.clientHeight / 2;
const HALF_WALL_WIDTH = wall.clientWidth / 2;

const spider = document.querySelector('.spider');
const HALF_SPIDER_HEIGHT = spider.getBoundingClientRect().height / 2;
const HALF_SPIDER_WIDTH = spider.getBoundingClientRect().width / 2;

const spiderY = HALF_WALL_HEIGHT - HALF_SPIDER_HEIGHT;
const spiderX = HALF_WALL_WIDTH - HALF_SPIDER_WIDTH;

spider.style.top = `${spiderY}px`;
spider.style.left = `${spiderX}px`;
