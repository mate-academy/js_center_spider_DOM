/* eslint-disable padding-line-between-statements */
/* eslint-disable operator-linebreak */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const centeredSpider = () => {
    const spider = document.querySelector('.spider');
    if (spider) {
      const spiderStyles =
        'top: 50%;left: 50%;transform: translate(-50%, -50%);';

      spider.style.cssText = spiderStyles;
    }
  };

  centeredSpider();
});
