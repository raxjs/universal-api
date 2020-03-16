import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import MyComponent from 'request';

render(<MyComponent />, document.body, { driver: DriverUniversal });
