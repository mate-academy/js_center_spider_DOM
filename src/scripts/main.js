'use strict';

const percent = '50%';

document.querySelector('.spider').style.top = percent;
document.querySelector('.spider').style.left = percent;

document.querySelector('.spider')
  .style.transform = `translate(-${percent}, -${percent})`;
