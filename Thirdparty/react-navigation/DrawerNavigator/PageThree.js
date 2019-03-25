import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class PageThree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page Three</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={_=>this.props.navigation.openDrawer()}
        >
          <Text style={[styles.text, {fontSize: 20, color: 'white'}]}>Open Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={_=>this.props.navigation.closeDrawer()}
        >
          <Text style={[styles.text, {fontSize: 20, color: 'white'}]}>Close Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={_=>this.props.navigation.toggleDrawer()}
        >
          <Text style={[styles.text, {fontSize: 20, color: 'white'}]}>Toggle Drawer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#abc',
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
