import { isDingdingMiniapp } from '@utils/miniappEnvApp';

export default () => (isDingdingMiniapp ? dd.createInnerAudioContext() : my.createInnerAudioContext());
