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
  Alert,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  componentDidMount() {
    Dimensions.addEventListener('change', this.dimensionsDidChange)
  }
  componentWillUnmount() {
    Dimensions.removeEventListener('chang', this.dimensionsDidChange)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.alertDimensions('window')}
          >
          <Text style={styles.text}>获取window信息</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.alertDimensions('screen')}
          >
          <Text style={styles.text}>获取screen信息</Text>
        </TouchableOpacity>
      </View>
    )
  }

  dimensionsDidChange(){
    const {width, height, fontScale, scale} = Dimensions.get('window')
    Alert.alert('DimensionsChanged', `Width:${width},Height:${height}, FontScale:${fontScale}, Scale:${scale}`)
  }

  alertDimensions(dim){
    const {width, height, fontScale, scale} = Dimensions.get(dim)
    Alert.alert('Dimensions', `Width:${width},Height:${height}, FontScale:${fontScale}, Scale:${scale}`)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: 'orange',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
