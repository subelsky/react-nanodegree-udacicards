import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Text, Button } from 'react-native-elements'

class Quiz extends React.Component {
  render() {
    const { deckName, deck } = this.props

    return (
      <View style={styles.container}>
        <Text>Start Quiz for {deck.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

export default connect(mapStateToProps)(Quiz)
