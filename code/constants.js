import { createElementSlider } from "./functions.js";

// Відео id.
export const VIDEOS_ID = [824804220, 824804210, 824804209, 824804192, 824804191, 824804190, 824804185, 824804182];

// Опції відео.
export const options = {
	width: 300,
	height: 260,
	loop: true,
	controls: false,
	getOptions(id) {
		return {
			id,
			width: this.width,
			height: this.height,
			loop: this.loop,
			controls: this.controls
		};
	},
	getOptionsModal(id) {
		return {
			id,
			loop: this.loop
		};
	}
};

// Масив елементів слайдера.
export const SLIDER_ITEMS  = VIDEOS_ID.map((id) => {
    return createElementSlider(id);
  })