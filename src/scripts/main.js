'use strict';

const spider = {
  link: document.querySelector('.spider'),
  position: {
    x: 50,
    y: 50,
  },
  direction: 0,
  toTop() {
    if (spider.position.y > 5) {
      spider.position.y--;
      spider.direction = 0;
      transferToDOM();
      listenDirections();
    }
  },
  toBottom() {
    if (spider.position.y < 95) {
      spider.position.y++;
      spider.direction = 180;
      transferToDOM();
      listenDirections();
    }
  },
  toRight() {
    if (spider.position.x < 95) {
      spider.position.x++;
      spider.direction = 90;
      transferToDOM();
      listenDirections();
    }
  },
  toLeft() {
    if (spider.position.x > 5) {
      spider.position.x--;
      spider.direction = 270;
      transferToDOM();
      listenDirections();
    }
  },
};

const fly = {
  link: document.querySelector('.fly'),
  position: {
    x: 30,
    y: 5,
  },
};

spider.link.style.transform = `translate(-50%, -50%)`;
fly.link.style.transform = `translate(-50%, -50%)`;
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

function gameCore(direction) {
  interval = setInterval(direction, 50);
}

document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowUp') {
    clearInterval(interval);
    gameCore(spider.toTop);
  }

  if (event.code === 'ArrowDown') {
    clearInterval(interval);
    gameCore(spider.toBottom);
  }

  if (event.code === 'ArrowRight') {
    clearInterval(interval);
    gameCore(spider.toRight);
  }

  if (event.code === 'ArrowLeft') {
    clearInterval(interval);
    gameCore(spider.toLeft);
  }
});

function listenDirections() {
  const xs = [fly.position.x, spider.position.x].sort((a, b) => b - a);
  const ys = [fly.position.y, spider.position.y].sort((a, b) => b - a);

  if (xs[0] - xs[1] < 6 && ys[0] - ys[1] < 6) {
    scoreCount();
    makeFly();
  }
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
}

const score = document.querySelector('.score');

function scoreCount() {
  score.innerText++;
}

function makeFly() {
  fly.position.y = randomInteger(5, 95);
  fly.position.x = randomInteger(5, 95);
}
