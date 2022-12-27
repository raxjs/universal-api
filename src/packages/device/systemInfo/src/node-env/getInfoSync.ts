import { formatSystemInfo } from '../common';



const getInfoSync = formatSystemInfo(() => {
  return {
    pixelRatio: 1,
    screenWidth: 1,
    screenHeight: 1,
    windowWidth: 1,
    windowHeight: 1,
    language: '',
    version: '',
    platform: '',
  };
});


export default getInfoSync;
