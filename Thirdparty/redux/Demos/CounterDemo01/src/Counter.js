import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

const Counter = ({count, increment, decrement}) =>{
  return (
      <View style={styles.container}>
        <Text style={styles.counter}>{count}</Text>
          <View style={styles.buttonGroup}>
           <TouchableOpacity
              style={styles.button}
              onPress={increment}
           >
             <Text style={styles.buttonTitle}>increment</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={decrement}
          >
            <Text style={styles.buttonTitle}>decrement</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },

  counter: {
    fontSize: 80,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonGroup: {
    margin: 10,
    flexDirection: 'row',
  },
  button: {
    padding: 5,
    paddingVertical: 15,
    margin: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
    flex: 1,
  },
  buttonTitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});