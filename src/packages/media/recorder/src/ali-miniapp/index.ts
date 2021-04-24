import { isDingdingMiniapp } from '@utils/miniappEnvApp';

const getRecorderManager = () => (isDingdingMiniapp ? dd.getRecorderManager() : my.getRecorderManager());

export default getRecorderManager;
