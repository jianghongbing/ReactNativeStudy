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
  Text,
  SafeAreaView,
  Dimensions,
  Alert,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{backgroundColor:'#2233ee', margin:10, padding: 10, borderRadius:5}}
          onPress={()=>{
            const scale=PixelRatio.get()
            const fontScale=PixelRatio.getFontScale()
            const pixelSize = PixelRatio.getPixelSizeForLayoutSize(100.5)
            const nearestPixel = PixelRatio.roundToNearestPixel(100.67)
            Alert.alert('PixelRatio Info', `scale:${scale}, fontScale:${fontScale},pixelSize:${pixelSize},nearestPixel:${nearestPixel}`)
          }}
          >
          <Text
            style={{color: 'white', fontSize: 20, textAlign:'center'}}
            >获取PixelRation信息</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
