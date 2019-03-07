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

  },
  dataImage: {

  },
});
