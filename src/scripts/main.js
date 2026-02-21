'use strict';

'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (!wall || !spider) {
  throw new Error('Required DOM elements (.wall or .spider) are missing.');
} else {
  initSpider();
}

function initSpider() {
  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  const centerSpider = () => {
    const x = (wall.clientWidth - spider.offsetWidth) / 2;
    const y = (wall.clientHeight - spider.offsetHeight) / 2;

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  };

  if (spider.complete) {
    centerSpider();
  } else {
    spider.addEventListener('load', centerSpider);
  }

  window.addEventListener('resize', centerSpider);
}
