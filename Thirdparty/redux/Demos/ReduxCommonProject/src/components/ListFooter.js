import React from 'react'
import {
  View,
  ActivityIndicator,
  Text,
} from 'react-native'

export const ListFooter = ({didLoadAllMovies})=>(
    <View style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
      { didLoadAllMovies&&<Text>已加载全部的电影</Text> || <ActivityIndicator animating={true}/>}
    </View>
)
