export default function formatBezier(easing) {
  if (easing) {
    let m = easing.match(/cubicBezier\((.+),(.+),(.+),(.+)\)/);
    return m && [m[1], m[2], m[3], m[4]];
  }
}
