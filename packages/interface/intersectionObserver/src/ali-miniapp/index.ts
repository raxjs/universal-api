import { isDingdingMiniapp } from 'universal-env';

export default (...args) => isDingdingMiniapp ? dd.createIntersectionObserver(...args) : my.createIntersectionObserver(...args);
