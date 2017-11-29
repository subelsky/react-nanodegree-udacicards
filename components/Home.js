import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { List, ListItem } from 'react-native-elements'

import { loadDecks } from './../actions'

class Home extends React.Component {
  componentDidMount() {
    this.props.loadDecks()
  }
  
  render() {
    const { decks } = this.props

    return (
      <List containerStyle={styles.list}>
        {Object.keys(decks).map((deckName) => (
          <ListItem 
            key={deckName} 
            title={decks[deckName].title} 
            onPress={() => this.props.navigation.navigate('DeckDetail',{ deckName: deckName })} />
        ))}
        <ListItem
          key='newDeck'
          title='Add a new deck...'
          onPress={() => this.props.navigation.navigate('NewDeck')} />
      </List>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#fff'
  },
})

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDecks: () => dispatch(loadDecks())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
