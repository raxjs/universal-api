import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import MyComponent from 'toast';

render(<MyComponent />, document.body, { driver: DriverUniversal });
