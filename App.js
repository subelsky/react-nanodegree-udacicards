import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'

import configureStore from './store/ConfigureStore';
import UdaciStatusBar from './components/UdaciStatusBar'
import Home from './components/Home'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <UdaciStatusBar />
          <Home />
        </View>
      </Provider>
    )
  }
}
