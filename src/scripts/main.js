'use strict';

const spider = {
  link: document.querySelector('.spider'),
  position: {
    x: 50,
    y: 50,
  },
  direction: 0,
  toTop() {
    if (spider.position.y > 2) {
      spider.position.y--;
      spider.direction = 0;
      transferToDOM();
    }
  },
  toBottom() {
    if (spider.position.y < 98) {
      spider.position.y++;
      spider.direction = 180;
      transferToDOM();
    }
  },
  toRight() {
    if (spider.position.x < 98) {
      spider.position.x++;
      spider.direction = 90;
      transferToDOM();
    }
  },
  toLeft() {
    if (spider.position.x > 2) {
      spider.position.x--;
      spider.direction = 270;
      transferToDOM();
    }
  },
};

const fly = {
  link: document.querySelector('.fly'),
  position: {
    x: 30,
    y: 0,
  },
};

spider.link.style.transform = `translate(-50%, -50%)`;
spider.link.style.transition = '0.2s';

function transferToDOM() {
  spider.link.style.top = spider.position.y + '%';
  spider.link.style.left = spider.position.x + '%';
  fly.link.style.top = fly.position.y + '%';
  fly.link.style.left = fly.position.x + '%';
  // eslint-disable-next-line max-len
  spider.link.style.transform = `translate(-50%, -50%) rotate(${spider.direction}deg)`;
}
transferToDOM();

let interval;

function moveCore(direction) {
  interval = setInterval(direction, 50);
}

document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowUp') {
    clearInterval(interval);
    moveCore(spider.toTop);
  }

  if (event.code === 'ArrowDown') {
    clearInterval(interval);
    moveCore(spider.toBottom);
  }

  if (event.code === 'ArrowRight') {
    clearInterval(interval);
    moveCore(spider.toRight);
  }

  if (event.code === 'ArrowLeft') {
    clearInterval(interval);
    moveCore(spider.toLeft);
  }
});
