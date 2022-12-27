'use strict';

const spider = document.querySelector('.spider');
const styles = getComputedStyle(spider);
const spiderWidth = parseFloat(styles.width);

spider.style.top = '50%';
spider.style.left = '50%';
spider.style.marginLeft = `-${spiderWidth / 2}px`;
spider.style.marginTop = `-${spiderWidth / 2}px`;
