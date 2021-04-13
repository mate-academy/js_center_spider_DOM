'use strict';

const sp = document.querySelector('.spider');
const spS = getComputedStyle(sp);

const spP = sp.parentNode;
const spPS = getComputedStyle(spP);

const spSw = Number.parseFloat(spS.width);
const spPSw = Number.parseFloat(spPS.width);

const spSh = Number.parseFloat(spS.height);
const spPSh = Number.parseFloat(spPS.height);

sp.style.marginLeft = `${(spPSw - spSw) / 2}px`;
sp.style.marginTop = `${(spPSh - spSh) / 2}px`;
