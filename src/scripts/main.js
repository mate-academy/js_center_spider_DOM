'use strict';

// write code here
const pavuk = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const y = (wall.clientHeight - pavuk.clientHeight) / 2;
const x = (wall.clientWidth - pavuk.clientWidth) / 2;

pavuk.style.top = `${y}px`;
pavuk.style.left = `${x}px`;
