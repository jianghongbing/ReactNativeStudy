import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import PropTypes from 'prop-types'

export default class CityList extends Component {
  render() {
    const {cityNames, style, textStyle, borderType} = this.props
    return (
        <View style={[styles.container, style]}>
          {
            cityNames.map((city, index)=>{
              return (
                  <View
                      key={index}
                      style={[styles.item, borderType==='solid'&&styles.solidBorder, borderType==='radius'&&styles.radiusBorder, borderType==='dash'&&styles.dashBorder]}
                  >
                    <Text style={[styles.text, textStyle]}>
                      {city}
                    </Text>
                  </View>
              )
            })
          }
        </View>
    )
  }
}

CityList.propTypes = {
  cityNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  textStyle: Text.propTypes.style,
  borderType: PropTypes.oneOf(['solid', 'radius', 'dash'])
}

CityList.defaultProps = {
  cityNames: ['北京', '上海', '广州', '深圳'],
  borderType: 'radius',
}


const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#666',
    padding: 5,
    borderRadius: 4.0,
  },

  item: {
    borderWidth: 5,
    borderColor: 'gray',
    padding: 5,
    backgroundColor: 'orange',
    marginVertical: 5,
  },

  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },

  solidBorder: {
    borderStyle: 'solid',
  },
  radiusBorder: {
    borderRadius: 5.0,
  },
  dashBorder: {
    borderStyle: 'dotted',
  }
})
