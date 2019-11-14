/* eslint-disable import/no-extraneous-dependencies */
import { createElement, render, useState, useEffect } from 'rax';
import * as DriverWeex from 'driver-weex';
import * as DriverDom from 'driver-dom';
import { isWeex } from 'universal-env';

import request from '../src/';

const Request = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    request({
      url: 'https://httpbin.org/post',
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        test: '1'
      },
      timeout: 5000
      // dataType: 'text' as any
    }).then((data) => {
      console.log('data', data);
      setData(data.data);
    }).catch((error) => {
      setError(error);
    });
  }, []);

  if (error) {
    return (
      <text>{JSON.stringify(error)}</text>
    );
  } else if (data) {
    return (
      <div>
        <p><text>{`data: ${JSON.stringify(data.data)}`}</text></p>
        <p><text>{`url: ${JSON.stringify(data.url)}`}</text></p>
        <p><text>{`headers: ${JSON.stringify(data.headers)}`}</text></p>
      </div>
    );
  } else {
    return <text>loading</text>;
  }
};

render(<Request />, document.body, { driver: isWeex ? DriverWeex : DriverDom });
