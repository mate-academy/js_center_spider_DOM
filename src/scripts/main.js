'use strict';

function positionSpider(selection) {
  const spider = document.querySelector(selection);

  const data = {
    type: 'absolute',
    coords: {
      top: '50%',
      left: '50%',
    },
    transform: '-50% -50%',
  };

  spider.style.position = data.type;
  spider.style.top = data.coords.top;
  spider.style.left = data.coords.left;
  spider.style.translate = data.transform;
}

positionSpider('.spider');
