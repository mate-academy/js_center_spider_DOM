'use strict';

const spider = document.querySelector('.spider');

function getSize(el) {
  const height = document.querySelector(el).clientHeight;
  const width = document.querySelector(el).clientWidth;

  return {
    height: height,
    width: width,
  };
}

spider.style.cssText = `
  position: absolute;
  top: ${getSize('.wall').height / 2 - getSize('.spider').height / 2}px;
  left: ${getSize('.wall').width / 2 - getSize('.spider').width / 2}px;
`;
