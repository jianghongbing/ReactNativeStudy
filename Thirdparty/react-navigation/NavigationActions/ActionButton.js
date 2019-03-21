import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'

const ActionButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[style, {backgroundColor: '#5566aa', borderRadius: 5, padding: 10}]}
      onPress={onPress}
      >
      <Text style={{color: 'white', textAlign: 'center', fontSize: 25}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionButton
