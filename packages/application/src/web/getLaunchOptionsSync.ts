export default () => {
  const url = window.location.search || window.location.hash; // 获取url中"?"符后的字串
  const theRequest = {};
  let strs;
  if (url.indexOf('?') != -1) {
    const str = url.split('?')[1];
    strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return theRequest;
};