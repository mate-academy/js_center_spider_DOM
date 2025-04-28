'use strict';

const container = document.querySelector('.wall');
const spider = container.querySelector('.spider');

const centerElement = (wrapper, child) => {
  wrapper.style.position = 'relative';
  child.style.position = 'absolute';

  child.style.top = `${(wrapper.clientHeight - child.clientHeight) / 2}px`;
  child.style.left = `${(wrapper.clientWidth - child.clientWidth) / 2}px`;
};

centerElement(container, spider);

window.addEventListener('resize', () => {
  centerElement(container, spider);
});
