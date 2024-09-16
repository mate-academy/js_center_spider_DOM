'use strict';

// write code here

let wall = document.querySelector('.wall')

let spider = document.querySelector('.spider')

spider.style.left = ((wall.clientWidth / 2) - (spider.clientWidth / 2)) + 'px'

spider.style.top = ((wall.clientHeight / 2) - (spider.clientHeight / 2)) + 'px'

