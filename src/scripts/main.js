function initCenterSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallComputedPos = getComputedStyle(wall).position;

  if (wallComputedPos === 'static') {
    wall.style.position = 'relative';
  }
  spider.style.position = 'absolute';

  const place = () => {
    const leftPos = (wall.clientWidth - spider.offsetWidth) / 2;
    const topPos = (wall.clientHeight - spider.offsetHeight) / 2;

    spider.style.left = `${leftPos}px`;
    spider.style.top = `${topPos}px`;
  };

  if (spider.complete) {
    place();
  } else {
    spider.addEventListener('load', place, { once: true });
  }
  window.addEventListener('resize', place);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCenterSpider, {
    once: true,
  });
} else {
  initCenterSpider();
}
