import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions,
} from 'react-native'
export const ListEmptyView = ({isLoading, error})=>(
    <View style={styles.container}>
      {
        isLoading &&
        (
          <View>
            <ActivityIndicator
                color='orange'
                size='large'
                animating={true}
            />
            <Text style={styles.loadingText}>{'正在加载...'}</Text>
          </View>
        )
      }
      {
        error&&<Text style={styles.error}>{'加载数据错误'}</Text>
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
  },

  loadingText: {
    color: '#333',
    fontSize: 18,
    textAlign:  'center',
    marginTop: 10,

  }

})