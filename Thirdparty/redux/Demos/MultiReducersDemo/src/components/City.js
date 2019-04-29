import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

export const City = ({cityName, id, onPress})=>(
    <TouchableOpacity
        style={styles.container}
        onPress={
          ()=>{
            console.log(`id:${id}`)
            onPress(id)
          }
          }
    >
      <Text style={styles.text}>{`${cityName}:点击删除`}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4545ed',
    borderRadius: 4,
    padding: 8,
    justifyContent: 'center',
    margin: 5,
  },
  text: {
    color: '#ddd',
    fontSize: 16,
    textAlign: 'center',
  },
})