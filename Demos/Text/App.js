/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          selectable={true}
          onLayout={(event)=>{
            console.log(event);
          }}
          onLongPress={()=>{
            console.log('on long press');
          }}
          onPress={()=>{
            console.log('on press');
          }}
        >
        葡萄美酒夜光杯,欲饮琵琶马上催;醉卧沙场君莫笑,古来征战几人回?</Text>
      <Text
        style={styles.text}
        disabled={true}
        onPress={()=>{
          console.log('on press');
        }}
      >
      昨夜风开露井桃,未央前殿月轮高;平阳歌舞新承宠,帘外春寒赐锦袍.
          <Text style={{color: 'white', fontWeight: '600'}}>{'--王昌龄<春宫曲>'}</Text>
        </Text>
        <Text
          style={styles.truncation}
          ellipsizeMode='head'
          numberOfLines={1}
        >
        独在异乡为异客,每逢佳节倍思亲;遥知兄弟登高处,遍插茱萸少一人.
        </Text>
        <Text
          style={styles.truncation}
          ellipsizeMode='middle'
          numberOfLines={1}
        >
        独在异乡为异客,每逢佳节倍思亲;遥知兄弟登高处,遍插茱萸少一人.
        </Text>
        <Text
          style={styles.truncation}
          ellipsizeMode='tail'
          numberOfLines={1}
        >
        独在异乡为异客,每逢佳节倍思亲;遥知兄弟登高处,遍插茱萸少一人.
        </Text>
        <Text
          style={styles.truncation}
          ellipsizeMode='clip'
          numberOfLines={1}
        >
        独在异乡为异客,每逢佳节倍思亲;遥知兄弟登高处,遍插茱萸少一人.
        </Text>
        <Text
          style={[styles.truncation, {height: 100}]}
          ellipsizeMode='tail'
          numberOfLines={3}
        >
        独在异乡为异客,每逢佳节倍思亲;遥知兄弟登高处,遍插茱萸少一人.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: 'orange',
    fontSize: 18,
    padding: 10,
    backgroundColor: 'blue',
  },
  truncation: {
    backgroundColor: 'orange',
    color: 'white',
    width: 100,
    height: 40,
    fontSize: 16,
    marginTop: 10,
  },

});
