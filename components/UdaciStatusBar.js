import React from 'react'
import { StatusBar, View } from 'react-native'
import { Constants } from 'expo'

// based on UdaciStatusBar from course example
export default function () {
  return (
    <View style={{ backgroundColor: '#000', height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={'#000'} barStyle={'light-content'} />
    </View>
  )
}

