import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import configureStore from './store/ConfigureStore';
import UdaciStatusBar from './components/UdaciStatusBar'
import Home from './components/Home'
import DeckDetail from './components/DeckDetail'

const MainNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'UdaciCards'
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.deckName
    })
  }
})

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
