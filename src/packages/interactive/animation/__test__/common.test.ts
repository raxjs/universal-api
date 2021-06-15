import { parseTransform } from '../src/common';

describe('animation common.ts', () => {
  const fixtures = {
    ' ': {},
    'rotate ': {},
    'rotate()': {},
    'Rotate(1deg)': {},
    'rotate(1turn)': {},
    'rotate(1e2deg)': {},
    'rotate(1deg,)': {},
    'rotate(1deg': {},
    'rotate(,1deg)': {},
    'rotate(1 deg)': {},
    'scale(1%)': {},
    'rotate(1deg)': { rotate: [1] },
    'rotate(1DEG)': { rotate: [1] },
    'rotate(-1.2deg)': { rotate: [-1.2] },
    'rotate ( 1deg , 2deg )': { rotate: [1, 2] },
    'rotate(1deg,2deg)translate(10px,20px)': { rotate: [1, 2], translate: [10, 20] },
    ' rotate ( 1deg , 2deg ) translate ( 10px , 20px ) ': { rotate: [1, 2], translate: [10, 20] },
    'rotate(1deg, 2deg) rotate(3deg, 4deg)': { rotate: [3, 4] },
    // unit
    'rotateX(1deg)': { rotateX: [1] },
    'rotateY(1deg)': { rotateY: [1] },
    'rotateZ(1deg)': { rotateZ: [1] },
    'rotate3d(1, 2, 3, 4deg)': { rotate3d: [1, 2, 3, 4] },
    'skew(1deg, 2deg)': { skew: [1, 2] },
    'skewX(1deg)': { skewX: [1] },
    'skewY(1deg)': { skewY: [1] },
    'translateX(1px)': { translateX: [1] },
    'translateY(1px)': { translateY: [1] },
    'translateZ(1px)': { translateZ: [1] },
    'translate3d(1px, 2px, 3px)': { translate3d: [1, 2, 3] },
    'scale(1, 2)': { scale: [1, 2] },
    'scaleX(1)': { scaleX: [1] },
    'scaleY(1)': { scaleY: [1] },
    'scaleZ(1)': { scaleZ: [1] },
    'scale3d(1, 2, 3)': { scale3d: [1, 2, 3] },
    'matrix(1, 2, 3, 4, 5, 6)': { matrix: [1, 2, 3, 4, 5, 6] },
    'matrix3d(1,2,3,4, 1,2,3,4, 1,2,3,4, 1,2,3,4)': { matrix3d: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4] },

  };

  Object.keys(fixtures).forEach((expr) => {
    test(`parseTransform: \`${expr}\``, () => {
      expect(parseTransform(expr)).toEqual(fixtures[expr]);
    });
  });
});
