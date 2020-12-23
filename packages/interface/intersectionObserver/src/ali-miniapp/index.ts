import { isDingdingMiniapp } from 'universal-env';

export default isDingdingMiniapp ? dd.createIntersectionObserver : my.createIntersectionObserver;
