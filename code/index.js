'use strict';// Суворий режим.

import { SLIDER_ITEMS } from "./constants.js";
import { createCarousel, createModalContent } from "./functions.js";

// Отримання елементів.
const carousel = document.getElementById('carousel');
const modal = document.getElementById('modal');
const modal_content = document.getElementById('modal_content');

// Медіа запит Ширина екрану користувача.
const clientWidth = document.documentElement.clientWidth;
  
const quantitySliderItem = (width) => {
  console.log(width);
  if (width > 820) {
    return 4
  } else if (width < 820 && width > 450) {
    return 2;
  }else return 1
}

// Вивід слайденра на сторінку.
createCarousel(SLIDER_ITEMS, carousel, quantitySliderItem(clientWidth)); 

// Функція відчинення модалки.
export function oppenModal(id) {
  createModalContent(id, modal_content);
  modal.classList.remove('_hiden')
}

// Функція зачинення модалки.
function close(ev) {
  if (ev.target.id === 'modal'|| ev.target.id === 'btn_close') {
    modal_content.innerHTML = '';
    modal.classList.add('_hiden')
  }
}

// Слухачі події зачинення модалки.
modal.addEventListener('click', close)

document.getElementById('btn_close')
  .addEventListener('click', close);
 