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
  Alert,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

type Props = {}
const ObjectAKey = 'com.rn.objectA'
const ObjectBKey = 'com.rn.objectB'

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.saveObjectA}
          >
          <Text style={styles.text}>保存数据A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.saveObjectB}
          >
          <Text style={styles.text}>保存数据B</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.getObjectA}
          >
          <Text style={styles.text}>获取数据A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.getObjectB}
          >
          <Text style={styles.text}>获取数据B</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.removeObjectA}
          >
          <Text style={styles.text}>移除数据A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.removeObjectB}
          >
          <Text style={styles.text}>移除数据B</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.removeAll}
          >
          <Text style={styles.text}>移除所有数据</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.getAllKeys}
          >
          <Text style={styles.text}>获取所有数据的key</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.mergeObjectA}
          >
          <Text style={styles.text}>merge数据A</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
  saveObjectA(){
    const object = {
      name: 'xiaoming',
      age: 10,
      sex: 'male'
    }
    AsyncStorage.setItem(ObjectAKey, JSON.stringify(object)).then(()=>{
      Alert.alert('保存数据A成功')
    }).catch((error)=>{
      console.log(error)
    })
  }

  saveObjectB(){
    const users = [
      {
        userName: 'admin',
        id: '001',
      },
      {
        userName: 'guest',
        id: '002',
      },
    ]
    AsyncStorage.setItem(ObjectBKey, JSON.stringify(users)).then(()=>{
      Alert.alert('保存数据B成功')
    }).catch((error)=>{
      console.log(error)
    })
  }

  getObjectA(){
    AsyncStorage.getItem(ObjectAKey).then((result)=>{
      Alert.alert('ObjectA', result)
    }).catch((error)=>{
      console.log(error)
    })
  }

  getObjectB(){
    AsyncStorage.getItem(ObjectBKey).then((result)=>{
      Alert.alert('ObjectB', result)
    }).catch((error)=>{
      console.log(error)
    })
  }

  removeObjectA(){
    AsyncStorage.removeItem(ObjectAKey).then(()=>{
      Alert.alert('移除了ObjectA')
    }).catch((error)=>{
      console.log(error)
    })
  }

  removeObjectB(){
    AsyncStorage.removeItem(ObjectBKey).then(()=>{
      Alert.alert('移除了ObjectB')
    }).catch((error)=>{
      console.log(error)
    })
  }

  removeAll(){
    AsyncStorage.clear().then(()=>Alert.alert('清除了所有数据')).catch((error)=>console.log(error))
  }

  getAllKeys(){
    AsyncStorage.getAllKeys().then(keys=>Alert.alert(JSON.stringify(keys))).catch(error=>console.log(error))
  }

  mergeObjectA(){
    const object = {
      name: 'xiaoming',
      age: 12,
      sex: 'male',
      score: 80,
    }
    AsyncStorage.mergeItem(ObjectAKey, JSON.stringify(object)).then(()=>Alert.alert('合并数据A成功')).catch(error=>console.log(error))
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#2233ee',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
});
