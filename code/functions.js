import { oppenModal } from "./index.js";
import { VIDEOS_ID, options } from "./constants.js";

// Функція створення HTML-елемента.
export function createHtmlElement(tagName = 'div', className, child) {
	const el = document.createElement(tagName);
	if (className) {
		el.className = className;
	}
	if (child) {
		el.append(child);
	}
	return el;
}

// Функція створеня елементу слайдера.
export function createElementSlider(id) {
	const div = createHtmlElement('div', 'vimeo', createHtmlElement('div', 'vimeo_btn'));

	div.addEventListener('click', e => {
		oppenModal(id);
	});
	const player = new Vimeo.Player(div, options.getOptions(id));

	return div;
}

// Функція створеня та відображення слайдера.
export function createCarousel(data, element, quantity = 4) {
	element.innerHTML = '';

	let div = createHtmlElement('div', 'carousel-item active');
	let divWrapper = createHtmlElement('div', 'vimeo-wrapper');

	data.forEach((el, i) => {
		if ((i + 1) % quantity == 0 && i + 1 < data.length) {
			divWrapper.appendChild(el);
			div.appendChild(divWrapper);
			element.appendChild(div);
			div = createHtmlElement('div', 'carousel-item');

			divWrapper = createHtmlElement('div', 'vimeo-wrapper');
		} else divWrapper.appendChild(el);
	});

	div.appendChild(divWrapper);
	element.appendChild(div);
}

// Функція створеня та відображення контенту модалки.
export function createModalContent(id, element) {
	element.innerHTML = '';
	const div = createHtmlElement('div', 'vimeo_modal');

	const player = new Vimeo.Player(div, options.getOptionsModal(id));
	player.setVolume(0.5);
	player.play();

	const ul = createHtmlElement('ul', 'vimeo_modal_btns');

	VIDEOS_ID.forEach(el => {
		const li = createHtmlElement('li', el === id ? 'vimeo_modal_btn _active' : 'vimeo_modal_btn');
		li.addEventListener('click', () => {
			createModalContent(el, element);
		});

		ul.append(li);
	});

	element.append(div);
	element.append(ul);
}