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
  SafeAreaView,
  View,
  Text,
} from 'react-native'

type Props = {}

const Item = ({text, style})=>{
  return (
      <View style={[styles.item, style]}>
        <Text style={styles.text}>{text}</Text>
      </View>
  )
};

export default class App extends Component<Props> {

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <Item style={styles.translateX} text='translateX'/>
          <Item style={styles.translateY} text='translateY'/>
          <Item style={styles.rotateX} text='rotateX'/>
          <Item style={styles.rotateY} text='rotateY'/>
          <Item style={styles.rotateZ} text='rotateZ'/>
          <Item style={[styles.itemCenter, styles.scaleX]} text='scaleX'/>
          <Item style={[styles.itemCenter, styles.scaleY]} text='scaleY'/>
          <Item style={[styles.itemCenter, styles.scale]} text='rotate'/>
          <Item style={[styles.itemCenter, styles.scale]} text='rotate'/>
          <Item style={[styles.itemCenter, styles.skewX]} text='skewX'/>
          <Item style={[styles.itemCenter, styles.skewY]} text='skewY'/>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'flex-start',

  },
  item: {
    backgroundColor: 'red',
    justifyContent: 'center',
    minHeight: 60,
    minWidth: 100,
    padding: 10,
  },
  itemCenter: {
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    // alignSelf: 'center',
  },
  translateX: {
    transform:[{
      translateX: 100,
    }]
  },
  translateY: {
    transform: [{
      translateY: 30,
    }]
  },
  rotateX: {
    marginTop: 30,
    transform: [{
      rotateX: '45deg',
    }]
  },
  rotateY: {
    transform: [{
      rotateY: '45deg',
    }]
  },
  rotateZ: {
    transform: [{
      rotateZ: '45deg',
    }]
  },
  scaleX: {
    transform: [{
      scaleX: 0.9,
    }]
  },
  scaleY: {
    marginTop: 10,
    transform: [{
      scaleY: 1.2,
    }]
  },
  scale: {
    transform: [{
      scale: 1.5,
    }]
  },
  skewX: {
    transform: [{
      skewX: '45deg',
    }],
  },
  skewY: {
    transform: [{
      skewY: '30deg',
    }],
  },
});