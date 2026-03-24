'use strict';

const pic = document.querySelector('.spider');
const con = document.querySelector('.wall');
function centerSpider() {
  const top = (con.clientHeight - pic.offsetHeight) / 2;
  const left = (con.clientWidth - pic.offsetWidth) / 2;
  pic.style.position = 'absolute';
  pic.style.top = top + 'px';
  pic.style.left = left + 'px';
}
window.addEventListener('load', centerSpider);
