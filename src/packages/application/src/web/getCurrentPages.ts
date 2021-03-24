export default () => {
  const query: any = {};
  const hash: any = {};
  window.location.hash
    .replace(/#.*?\?/, '')
    .split('&')
    .forEach((i) => {
      hash[i.split('=')[0]] = i.split('=')[1];
    });
  window.location.search
    .replace('?', '')
    .split('&')
    .forEach((i) => {
      query[i.split('=')[0]] = i.split('=')[1];
    });
  return [{ pageId: `${window.location.pathname }-1`, query, hash }];
};
