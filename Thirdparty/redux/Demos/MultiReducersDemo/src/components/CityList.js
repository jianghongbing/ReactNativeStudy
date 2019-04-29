import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import PropTypes from 'prop-types'

import { City } from './City'

export const CityList=({cityList, onPress})=>(
    <View style={styles.container}>
      {cityList.map((city)=>(<City cityName={city.name} id={city.id} key={city.id} onPress={onPress}/>))}
    </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
})

CityList.propTypes = {
  cityList: PropTypes.array,
}