'use strict';

window.addEventListener('DOMContentLoaded', function () {
  const spiderImg = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spiderImg || !wall) {
    return;
  }

  function centerSpider() {
    const imgW = spiderImg.clientWidth;
    const imgH = spiderImg.clientHeight;
    const wallW = wall.clientWidth;
    const wallH = wall.clientHeight;
    const left = (wallW - imgW) / 2;
    const topPos = (wallH - imgH) / 2;

    spiderImg.style.position = 'absolute';
    spiderImg.style.left = left + 'px';
    spiderImg.style.top = topPos + 'px';
    spiderImg.style.transform = 'none';
    spiderImg.style.margin = '0';
    spiderImg.style.zIndex = '1000';
  }

  function tryCenter() {
    if (spiderImg.complete && spiderImg.naturalWidth > 0) {
      centerSpider();
    } else {
      spiderImg.addEventListener('load', centerSpider);
    }
  }

  tryCenter();
  window.addEventListener('resize', centerSpider);
});
