import { isInViewport } from './viewport-utils.js';

export const whenOnScreen = ({ element, offset = 300, lookup = () => {} }) => {
	return isInViewport(element, { offset });
};
