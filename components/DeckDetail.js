import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1>{this.props.title}</Text>
        <Text>
          {this.props.cardCount}
          {this.props.cardCount === 1 ? ' card' : ' cards'}
        </Text>
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
  const { title, questions } = state[deckName]

  const cardCount = questions.length

  return { title, cardCount }
}

export default connect(mapStateToProps)(DeckDetail)
