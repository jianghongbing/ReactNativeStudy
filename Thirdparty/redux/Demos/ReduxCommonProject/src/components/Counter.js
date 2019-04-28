import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import { CityList } from './CityList'


const Counter = ({count, increment, decrement, incrementIfOdd, incrementAsync, cityList, addCity, deleteCity, sortCities}) =>{
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
        <View style={styles.buttonGroup}>
          <TouchableOpacity
              style={styles.button}
              onPress={incrementIfOdd}
          >
            <Text style={styles.buttonTitle}>increment if odd </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={_=>incrementAsync(2000)}
          >
            <Text style={styles.buttonTitle}>decrement async</Text>
          </TouchableOpacity>
        </View>
        <CityList cityList={cityList} onPress={deleteCity}/>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
              style={styles.button}
              onPress={()=>addCity('武汉')}
          >
            <Text style={styles.buttonTitle}>Add City</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={sortCities}
          >
            <Text style={styles.buttonTitle}>Sort Cities</Text>
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