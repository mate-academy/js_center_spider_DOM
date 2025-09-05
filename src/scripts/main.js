'use strict';

/**
 * Center the spider
 *
 * @param {string} fieldClass
 * @param {string} spiderClass
 */
function centerTheSpider(fieldClass, spiderClass) {
  const wall = document.querySelector(fieldClass);
  const spider = document.querySelector(spiderClass);

  if (!wall || !spider) {
    /* eslint-disable-next-line no-console */
    console.warn(
      `Check that elements with ${fieldClass} and ` +
        `${spiderClass} are presented`,
    );

    return;
  }

  // check positioning
  if (wall.style.position !== 'relative') {
    wall.style.position = 'relative';
  }

  // check positioning
  if (spider.style.position !== 'absolute') {
    spider.style.position = 'absolute';
  }

  function moveSpider() {
    const offsetX = (wall.clientWidth - spider.clientWidth) / 2;
    const offsetY = (wall.clientHeight - spider.clientHeight) / 2;

    spider.style.left = `${offsetX}px`;
    spider.style.top = `${offsetY}px`;
  }

  // spider is image element...
  if (spider.complete) {
    // it is already loaded at this time
    moveSpider();
  } else {
    // not yet - so we've add listener
    spider.addEventListener('load', moveSpider, { once: true });
  }

  // center the spider on window resize
  window.addEventListener('resize', moveSpider);
}

document.addEventListener('DOMContentLoaded', () => {
  // init spider only when document (and images) are loaded
  centerTheSpider('.wall', '.spider');
});
