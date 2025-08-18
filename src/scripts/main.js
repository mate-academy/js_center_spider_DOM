'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // eslint-disable-next-line curly
  if (!wall || !spider) return;

  const centerSpider = () => {
    wall.style.position = 'relative';
    spider.style.position = 'absolution';

    const cw = wall.clientWidth;
    const ch = wall.clientHeight;
    const sw = spider.offsetWidth;
    const sh = spider.offsetHeight;

    const left = (cw - sw) / 2;
    // eslint-disable-next-line no-shadow
    const top = (ch - sh) / 2;

    spider.style.left = `${Math.round(left)}px`;
    spider.style.top = `${Math.round(top)}px`;
  };

  centerSpider();
  window.addEventListener('resize', centerSpider);
});
