import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native'

const contactsIcon = require('../src/imgs/home.png')
const contactsSelectedIcon = require('../src/imgs/home_selected.png')

export default class PageTwo extends Component {
  static navigationOptions = ({navigation})=>{
    return {
      tabBarIcon:({focused, horizontal, tintColor})=>{
        const icon = focused ? contactsSelectedIcon : contactsIcon
        return <Image source={icon} />
      },
      tabBarLabel: null,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page Two</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  text: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  },
})
