import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Text, Button } from 'react-native-elements'

class Quiz extends React.Component {
  state = {
    cardNum: 1,
    numCorrect: 0,
    answerShowing: false
  }

  nextCard() {
    this.setState((prevState) => ({ cardNum: prevState.cardNum + 1 }))
  }

  correct() {
    this.setState((prevState) => ({ numCorrect: prevState.numCorrect + 1 }))
    this.nextCard()
  }

  incorrect() {
    this.nextCard()
  }

  render() {
    const { deckName, deck } = this.props
    const { questions } = deck
    const { cardNum, answerShowing } = this.state
    const card = questions[cardNum - 1]
    const { question, answer } = card

    return (
      <View style={styles.container}>
        <Text>{cardNum} / {questions.length}</Text>
        <Text h2>{question}</Text>

        {answerShowing ?  
          <View>
            <Text h3>{answer}</Text>

            <Button
              buttonStyle={styles.correctButton}
              onPress={() => this.correct()}
              title='Correct' />

            <Button
              buttonStyle={styles.inorrectButton}
              onPress={() => this.incorrect()}
              title='Inorrect' />
            </View>

          : 

          <Button
            buttonStyle={styles.answerButton}
            onPress={() => this.setState(() => ({ answerShowing: true }))}
            title='Answer' />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  answerButton: {
    backgroundColor: '#0f0'
  },

  correctButton: {
    backgroundColor: '#00f'
  },

  incorrectButton: {
    backgroundColor: '#f00'
  }
})

const mapStateToProps = (state,ownProps) => {
  const { deckName } = ownProps.navigation.state.params
  const deck = state[deckName]

  return { deckName, deck }
}

export default connect(mapStateToProps)(Quiz)
