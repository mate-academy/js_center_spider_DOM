'use strict';

const container = document.getElementsByClassName('wall')[0];
const spider = document.getElementsByClassName('spider')[0];

const containerRect = container.getBoundingClientRect();
const elementRect = spider.getBoundingClientRect();

const centerX =
  containerRect.left + containerRect.width / 2 - elementRect.width / 2;
const centerY =
  containerRect.top + containerRect.height / 2 - elementRect.height / 2;

const boundedX = Math.max(
  containerRect.left,
  Math.min(centerX, containerRect.right - elementRect.width),
);
const boundedY = Math.max(
  containerRect.top,
  Math.min(centerY, containerRect.bottom - elementRect.height),
);

spider.style.left = `${boundedX - containerRect.left}px`;
spider.style.top = `${boundedY - containerRect.top}px`;
