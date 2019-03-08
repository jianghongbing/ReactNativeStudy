/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

type Props = {}

const imageSource = './src/imgs/image_01@2x.png';
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageList}>
          <Image
            style={[styles.localImage, {resizeMode: 'contain'}]}
            blurRadius={1}
            source={require('./src/imgs/image_01.png')}
            capInsets={{top: 10, left: 10, bottom: 10, right: 10}}
          />
          <Image
            style={[styles.localImage, {resizeMode: 'cover'}]}
            source={require('./src/imgs/image_02.png')}
          />
          <Image
            style={[styles.localImage, {resizeMode: 'stretch'}]}
            source={require('./src/imgs/image_03.png')}
          />
          <Image
            style={[styles.localImage, {resizeMode: 'center', tintColor: 'green'}]}
            source={require('./src/imgs/image_04.png')}
          />
          <Image
            style={[styles.localImage, {resizeMode: 'repeat'}]}
            source={require('./src/imgs/image_05.png')}
          />
        </View>
        <View>
          <Image
            style={styles.netImage}
            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552022871991&di=31d78669b5e32ed8e22311c86f28d9b7&imgtype=0&src=http%3A%2F%2Fzzpic1.58cdn.com.cn%2Fzhuanzh%2Fn_v1bkujjd5324ivsk67tjua.jpg'}}
            onLoadStart={()=>{
              console.log('load start');
            }}
            onLoad={()=>{
              console.log('load complete and successful');
            }}
            onLoadEnd={()=>{
              console.log('load end');
            }}
            onProgress={({nativeEvent})=>{
              console.log(nativeEvent);
              console.log(`loaded:${nativeEvent.loaded}, total:${nativeEvent.total}`);
            }}
            onError={(event)=>{
              console.log('加载图片发生错误');
              console.log(event);
            }}
            defaultSource={require('./src/imgs/image_04.png')}
          />
          <Image
            style={styles.dataImage}
            source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  imageList: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  localImage: {
    width: 100,
    height: 100,
  },
  netImage: {
    backgroundColor: 'red',
    width: 200,
    height: 200,
    resizeMode: 'center',
  },
  dataImage: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
  },
});
