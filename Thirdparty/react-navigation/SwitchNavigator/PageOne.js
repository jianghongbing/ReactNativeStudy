import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native'

export default class PageOne extends Component {
  static navigationOptions = _=>{
    return {
      title: 'Home',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page One</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={_=>this.props.navigation.navigate('PageTwo')}
          >
          <Text style={[styles.text, {fontSize: 20, color: 'white'}]}>To Page Two</Text>
        </TouchableOpacity>
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
  button: {
    padding: 10,
    margin:10,
    backgroundColor: '#34F',
    borderRadius: 5,
  },
})
