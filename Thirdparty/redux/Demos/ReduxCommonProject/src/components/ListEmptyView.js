import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions,
} from 'react-native'
export const ListEmptyView = (isLoading, error)=>(
    <View style={styles.container}>
      {
        isLoading &&
        (
          <View>
            <ActivityIndicator
                color='gray'
                size='small'
                animating={true}
            />
          </View>
        )
      }
    </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height,

  },

  error: {
    color: 'red',
    fontSize: 40,
  },
  noData: {
    color: 'orange',
    fontSize: 35,
  }
})