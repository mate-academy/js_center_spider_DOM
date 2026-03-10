'use strict';

'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.position = 'absolute';
field.style.position = 'relative';

const centerX = (field.offsetWidth - spider.offsetWidth) / 2;
const centerY = (field.offsetHeight - spider.offsetHeight) / 2;

spider.style.left = centerX + 'px';
spider.style.top = centerY + 'px';
