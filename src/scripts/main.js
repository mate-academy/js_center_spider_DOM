'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

field.style.position = 'relative';

spider.style.cssText = `display: block; top: 50%; left: 50%;
                        transform: translate(-50%, -50%)`;
