/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert, AlertIOS, ActionSheetIOS} from 'react-native';

type Props = {};

class MyButton extends Component {
  render(){
    return (
      <TouchableOpacity
        style={{backgroundColor: '#ff9900', padding: 10, borderRadius: 8, margin: 10}}
        onPress={()=>{
          this.props.clickHandler();
        }}
      >
        <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MyButton
          title='退出登录'
          clickHandler={()=>{
            Alert.alert('退出登录', '', [
              {text: '确认', onPress:()=>this.alert('确认退出登录')},
              {text: '取消', onPress:()=>this.alert('取消退出登录'), style:'cancel'}
            ])
          }}
        >
        </MyButton>
        <MyButton
          title='选项'
          clickHandler={()=>{
            Alert.alert('这是对话框的标题', '对话框信息', [
              {text: '选项1', onPress: ()=>this.alert('点击了选项1')},
              {text: '选项2', onPress:()=>this.alert('点击了选项2')},
              {text: '选项3', onPress:()=>this.alert('点击了选项3')},
            ],{cancelable: true});
          }}
        >
        </MyButton>
        <MyButton
          title='AlertIOS-alert'
          clickHandler={()=>{
            AlertIOS.alert('购买设备', '请选择一个设别',[
              {text: 'iPhone', onPress:()=>{
                this.alert('购买iPhone');
              }},
              {text: 'Mac', onPress:()=>{
                this.alert('购买Mac');
              }},
              {text: '只是看看', onPress:()=>{
                this.alert('逛逛');
              }, style:'destructive'},
            ]);
          }}
        >
        </MyButton>
        <MyButton
          title='AlertIOS-prompt'
          clickHandler={()=>{
            AlertIOS.prompt('重新登录','请输入密码', [
              {
                text: '确定',
                onPress:(text)=>{
                  this.alert(`密码:${text}`);
                }
              },
              {
                text: '取消',
                style: 'destructive',
              },
            ], 'secure-text', '123456', 'number-pad')
          }}>
        </MyButton>
        <MyButton
          title='ActionSheetIOS-show'
          clickHandler={()=>{
            ActionSheetIOS.showActionSheetWithOptions({
              options:['iPhone', 'iPad', 'Mac', 'Watch', 'Cancel'],
              destructiveButtonIndex: 3,
              cancelButtonIndex: 4,
              title: 'Apple',
              message: '请选择产品',
              tintColor: 'blue',
            }, (buttonIndex)=>{
              this.alert(`点击了选项${buttonIndex}`);
            })
          }}
        >
        </MyButton>
        <MyButton
          title='ActionSheetIOS-share'
          clickHandler={()=>{
            // ActionSheetIOS.showShareActionSheetWithOptions()
          }}
        >
        </MyButton>
      </View>
    );
  }
  alert(title){
    Alert.alert(title, null, ()=>{
      console.log('点击了ok');
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
