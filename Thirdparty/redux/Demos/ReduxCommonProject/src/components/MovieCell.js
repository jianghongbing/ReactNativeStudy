import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export const MovieCell = ({title, year})=>(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.year}>{year}</Text>
    </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  year: {
    color: '#666',
    fontSize: 16,
  },

})
