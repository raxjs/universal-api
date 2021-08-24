---
group:
  title: 开放接口
title: subscribeMessage
---

# subscribeMessage 

[![npm](https://img.shields.io/npm/v/@uni/subscribe-message.svg)](https://www.npmjs.com/package/@uni/subscribe-message)


调起客户端小程序订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小程序设置页，通过 wx.getSetting 接口可获取用户对相关模板消息的订阅状态。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持

<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

### 微信容器注意事项：

- 一次性模板 id 和永久模板 id 不可同时使用。
- 低版本基础库2.4.4~2.8.3 已支持订阅消息接口调用，仅支持传入一个一次性 tmplId / 永久 tmplId。
- 2.8.2 版本开始，用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面。
- 2.10.0 版本开始，开发版和体验版小程序将禁止使用模板消息 formId。
- 一次授权调用里，每个tmplId对应的模板标题不能存在相同的，若出现相同的，只保留一个。
- 2.10.0 版本开始，支持订阅语音消息提醒，详情

## 安装

```bash
$ npm install @uni/subscribeMessage --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import subscribeMessage from '@uni/subscribeMessage';

subscribeMessage({
  tmplIds: [''],
  success: () => {
    console.log('success');
  },
  fail: (res) => {
    console.log('fail', res);
  },
  complete: (res) => {
    console.log('complete', res);
  }
});

subscribeMessage({
  tmplIds: [''],
}).then((res?) => {
  console.log('success');
});
```

你也可以从大包引入：
```javascript
import { subscribeMessage } from '@uni/apis';
```

## 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | 是 | - |
| options.tmplIds | `Array`  | 需要订阅的消息模板的id的集合，一次调用最多可订阅3条消息 | 是 |  - |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |

### object.success 回调返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| errMsg | `string` | 接口调用成功时errMsg值为'requestSubscribeMessage:ok' |
| [TEMPLATE_ID: string] | `string`  | [TEMPLATE_ID]是动态的键，即模板id，值包括'accept'、'reject'、'ban'、'filter'。'accept'表示用户同意订阅该条id对应的模板消息，'reject'表示用户拒绝订阅该条id对应的模板消息，'ban'表示已被后台封禁，'filter'表示该模板因为模板标题同名被后台过滤。例如 { errMsg: "requestSubscribeMessage:ok", zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: "accept"} 表示用户同意订阅zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE这条消息 |

### object.fail 回调返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| errMsg | `string` | 接口调用失败错误信息 |
| errCode | `string`  | 接口调用失败错误码 |

</div>
<div>

```jsx | inline
/**
 * iframe: true
 */
import React from 'react';
export default () => (
  <iframe style={{
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      width: '375px',
      height: '700px'
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/subscribe-message/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i1/O1CN01Ky8HXS23ytpewgaAV_!!6000000007325-0-tps-688-630.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>


```jsx | inline
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      document.querySelector('.__dumi-default-menu').style.background = '#fff';
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').querySelector('.markdown').querySelector('h1').style.marginTop = 0;
        parent.postMessage && parent.postMessage(parent.postMessage({ event: 'syncIframeHeight', height: document.querySelector('.__dumi-default-layout-content').offsetHeight }, '*'));
      }
    }

    render() {
      return null;
    }
  }
```
