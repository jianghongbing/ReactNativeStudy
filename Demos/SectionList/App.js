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
  RefreshControl,
  ActivityIndicator,
  SectionList,
  Image,
} from 'react-native';

type Props = {}
const data = [
  {
    group: '我的好友',
    groupId: '000001',
    data: [
      {
        name: '张三',
        avatarUrl: './src/imgs/image_01.png',
        userId: 'friend00',
      },
      {
        name: '李四',
        avatarUrl: './src/imgs/image_02.png',
        userId: 'friend01',
      },
      {
        name: '王五',
        avatarUrl: './src/imgs/image_03.png',
        userId: 'friend02',
      },
      {
        name: '赵六',
        avatarUrl: './src/imgs/image_03.png',
        userId: 'friend03'
      },
    ]
  },
  {
    group: '我的同学',
    groupId: '000002',
    data: [
      {
        name: '小明',
        avatarUrl: './src/imgs/image_05.png',
        userId: 'classmate00',
      },
      {
        name: '小红',
        avatarUrl: './src/imgs/image_04.png',
        userId: 'classmate01',
      },
      {
        name: '小飞',
        avatarUrl: './src/imgs/image_01.png',
        userId: 'classmate02',
      },
      {
        name: '小龙',
        avatarUrl: './src/imgs/image_03.png',
        userId: 'classmate03'
      },
    ]
  },
  {
    group: '我的老师',
    groupId: '000003',
    data: [
      {
        name: '语文老师',
        avatarUrl: './src/imgs/image_04.png',
        userId: 'teacher00',
      },
      {
        name: '数学老师',
        avatarUrl: './src/imgs/image_02.png',
        userId: 'teacher01',
      },
      {
        name: '美术老师',
        avatarUrl: './src/imgs/image_03.png',
        userId: 'teacher02',
      },
      {
        name: '音乐老师',
        avatarUrl: './src/imgs/image_01.png',
        userId: 'teacher03'
      },
    ]
  },
]



export default class App extends Component<Props> {

  renderItem({name, avatarUrl}) {
    return (
      <View style={{flexDirection:'row', padding: 10, alignItems: 'center'}}>
        <Image
          source={require('./src/imgs/image_03.png')} />
        <Text style={{color: 'red', fontSize: 16, marginStart: 5}}>{name}</Text>
      </View>
    )
  }

  renderSeparator() {
    return (
      <View style={{backgroundColor:'gray', height: 0.5}}/>
    )
  }

  renderSectionHeader(section) {
    return (
      <View style={{backgroundColor: 'orange', padding: 10}}>
        <Text style={{color: 'white', fontSize: 18}}>{section.group}</Text>
      </View>
    )
  }

  renderSectionSeparatorComponent(){
    return (
      <View style={{backgroundColor:'green', padding: 10}}>
        <Text style={{color: 'white', fontSize:14}}>添加到组的头部下面和组的尾部上面的组件</Text>
      </View>
    )
  }

  renderSectionFooter(section) {
    return (
      <View style={{backgroundColor: 'red', padding: 10}}>
        <Text style={{color: 'white', fontSize: 18, textAlign:'center'}}>
          {`${section.group}分组的尾部`}
        </Text>
      </View>
    )
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={data}
          renderItem={({item})=>this.renderItem(item)}
          keyExtractor={item=>item.userId}
          ItemSeparatorComponent={this.renderSeparator}
          renderSectionHeader={({section})=>this.renderSectionHeader(section)}
          renderSectionFooter={({section})=>this.renderSectionFooter(section)}
          stickySectionHeadersEnabled={false}
          SectionSeparatorComponent={this.renderSectionSeparatorComponent}
          />
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
