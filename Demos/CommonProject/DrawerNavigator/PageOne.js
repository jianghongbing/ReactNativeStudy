import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class PageOne extends Component {
  static navigationOptions = _=>{
    return {
      drawerLabel: (<Text>Home</Text>),
      drawerIcon:(<Icon name='home' size={30}/>)
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page One</Text>
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
