import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class PageTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page Two</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={_=>this.props.navigation.navigate('PageThree')}
        >
          <Text
              style={[styles.text, {color: 'white', fontSize: 20}]}
          >To Page Three</Text>
        </TouchableOpacity>
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
  button: {
    padding: 10,
    margin:10,
    backgroundColor: '#34F',
    borderRadius: 5,
  },
});
