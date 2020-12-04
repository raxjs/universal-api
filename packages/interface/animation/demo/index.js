// /* eslint-disable import/no-extraneous-dependencies */
// import {createElement, Component, render, findDOMNode} from 'rax';
// import animation from '../src/index';

// const styles = {
//   container: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'red'
//   }
// };

// class App extends Component {
//   componentDidMount() {
//     const box = findDOMNode(this.refs.box); // 获取元素
//     // 调用动画方法
//     setTimeout(() => {
//       animation({
//         props: [{
//           element: box,
//           property: 'transform.translateX',
//           easing: 'easeOutSine',
//           duration: 200,
//           start: 0,
//           end: 200,
//           delay: 100
//         }, {
//           element: box,
//           property: 'opacity',
//           easing: 'easeOutSine',
//           duration: 200,
//           end: 0.2,
//           delay: 100
//         }]
//       }, (e) => {
//         console.log('timing end', e);
//       });
//     }, 100);
//   }

//   render() {
//     return (
//       <div ref="box" style={styles.container} />
//     );
//   }
// }

// render(<App />);
