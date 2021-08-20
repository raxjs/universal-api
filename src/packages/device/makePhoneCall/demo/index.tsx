/* eslint-disable import/no-extraneous-dependencies */
import {createElement, useState} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Input from 'rax-textinput';
import makePhoneCall from '@uni/make-phone-call';

const styles = {
  flex: {
    flexDirection: 'row'
  },
  button: {
    marginLeft: '10rpx',
    padding: '10rpx 20rpx',
    background: '#17BD88',
    color: '#fff',
    fontSize: '26rpx',
    textAlign: 'center'
  },
};

const Index = () => {
  const [phone, setPhone] = useState('10086')

  return (
    <View style={{
      ...styles.flex,
      marginTop: 30,
    }}>
      <Input
        style={{border: '1px solid #eee', flex: '1 1 0'}}
        value={phone}
        placeholder="输入手机号码"
        onInput={e => setPhone(e.target.value)}/>
      <View style={styles.button} onClick={async () => {
        await makePhoneCall({
          phoneNumber: phone
        });
        console.log('拨号完成');
      }}>点击拨号</View>
    </View>
  );
};

export default Index;
