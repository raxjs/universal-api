import { isDingdingMiniapp } from '@utils/miniappEnvApp';

export default (id) => (isDingdingMiniapp ? dd.createVideoContext(id) : my.createVideoContext(id));
