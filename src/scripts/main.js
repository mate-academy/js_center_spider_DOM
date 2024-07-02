'use strict';

// write code here

const documentElement = (className) => {
    return document.querySelector(className);
}

const wall = documentElement('.wall');
const spider = documentElement('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth; 

const spiderHeight = spider.clientHeight; 
const spiderWidth = spider.clientWidth; 

spider.style.top = `${(wallHeight / 2) - (spiderHeight / 2)}px`;
spider.style.left = `${(wallWidth / 2) - (spiderWidth / 2)}px`;
