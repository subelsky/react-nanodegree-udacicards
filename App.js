import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import configureStore from './store/ConfigureStore';
import UdaciStatusBar from './components/UdaciStatusBar'
import Home from './components/Home'
import DeckDetail from './components/DeckDetail'
import NewCard from './components/NewCard'
import NewDeck from './components/NewDeck'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/notifications'

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
  },

  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'New Deck'
    }
  },

  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'New Card'
    }
  },

  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      title: 'Quiz'
    })
  }
})

const store = configureStore()

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

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
