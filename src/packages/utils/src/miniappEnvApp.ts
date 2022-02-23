
function isUndef(type: string): boolean {
  return type === 'undefined';
}
export const isDingdingMiniapp = !isUndef(typeof dd) && dd !== null && !isUndef(typeof dd.alert);
