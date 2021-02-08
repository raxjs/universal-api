import { isDingdingMiniapp } from '@uni/env';

export default (...args) => isDingdingMiniapp ? dd.createIntersectionObserver(...args) : my.createIntersectionObserver(...args);
