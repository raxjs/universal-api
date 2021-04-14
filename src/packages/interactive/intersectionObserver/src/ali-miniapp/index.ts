import { isDingdingMiniapp } from '@utils/miniappEnvApp';

export default (...args) => (isDingdingMiniapp ? dd.createIntersectionObserver(...args) : my.createIntersectionObserver(...args));
