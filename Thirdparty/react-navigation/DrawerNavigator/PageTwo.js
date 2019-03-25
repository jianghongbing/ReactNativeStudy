import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default class PageTwo extends Component {
  static navigationOptions = {
    title: '喜爱',
    drawerIcon: ({tintColor, focused})=> {
      const color = focused ? tintColor : 'orange';
      return (<Icon name='star' size={25} color={color}/>)
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page Two</Text>
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
