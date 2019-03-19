import React, {Component} from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

export const PageTwoHeaderLeft = _=>{
  return (
    <TouchableOpacity>
      <Text style={{color: 'white', fontSize: 16}}>Left</Text>
    </TouchableOpacity>
  )
}

export const PageTwoHeaderRight = _=>{
  return (
    <TouchableOpacity>
      <Text style={{color: 'white', fontSize: 16}}>Right</Text>
    </TouchableOpacity>
  )
}


class PageTwo extends Component {
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Text>12345</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4455EE',
    justifyContent: 'center',
    flex: 1,
  },

})

export default PageTwo
