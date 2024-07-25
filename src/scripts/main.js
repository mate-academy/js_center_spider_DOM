'use strict';

// write code here
const field = document.querySelector('.wall');
const character = document.querySelector('.spider');

const setCharacterByCenter = () => {
  const fieldWidth = field.clientWidth / 2;
  const characterWidth = character.clientWidth / 2;
  const characterCenterPosition = fieldWidth - characterWidth;

  character.style.left = `${characterCenterPosition}px`;
  character.style.top = `${characterCenterPosition}px`;
};

setCharacterByCenter();
