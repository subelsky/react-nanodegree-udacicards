import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Text, Button } from 'react-native-elements'

class DeckDetail extends React.Component {
  render() {
    const { navigation, deckName, deck } = this.props
    const { title, questions } = deck
    const cardCount = questions.length

    return (
      <View style={styles.container}>
        <Text h1>{title}</Text>

        <Text>
          {cardCount}
          {cardCount === 1 ? ' card' : ' cards'}
        </Text>

        <Button
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('NewCard', { deckName })}
          title='Add a Card' />

        {cardCount > 0 &&
          <Button
            buttonStyle={styles.button}
            onPress={() => navigation.navigate('Quiz', { deckName })}
            title='Start Quiz' />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    //flex: 1,
    //flexDirection: 'row',
    //alignItems: 'center'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})

const mapStateToProps = (state,ownProps) => {
  const { deckName } = ownProps.navigation.state.params
  const deck = state[deckName]

  return { deckName, deck }
}

export default connect(mapStateToProps)(DeckDetail)
