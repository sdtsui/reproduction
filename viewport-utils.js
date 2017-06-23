export const isInViewport = (element, { offset }) => {
	if (!element) {
		return;
	}
	const elementDimensions = element.getBoundingClientRect();
	const viewport = {
		top: -offset,
		left: -offset,
		right: global.document.documentElement.clientWidth + offset,
		bottom: global.document.documentElement.clientHeight + offset
	};
	return elementDimensions.right >= viewport.left &&
		elementDimensions.left <= viewport.right &&
		elementDimensions.bottom >= viewport.top &&
		elementDimensions.top <= viewport.bottom;
};

export { whenOnScreen } from './scroll-tools.js';
