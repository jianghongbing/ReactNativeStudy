import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native'

export default class PageOne extends Component {
  static navigationOptions = ({navigation})=>{
    console.log(navigation)
    return {
      title: 'Home',
      tabBarOnPress: ({navigation, defaultHandler})=>{
        Alert.alert('点击了Home item')
        defaultHandler()
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page One</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eee'
  },
  text: {
    color: '#56f',
    fontSize: 40,
    textAlign: 'center',
  },
})
