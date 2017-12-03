import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Text, Button } from 'react-native-elements'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/notifications'

class Quiz extends React.Component {
  state = {
    cardNum: 1,
    numCorrect: 0,
    answerShowing: false
  }

  nextCard() {
    this.setState((prevState) => ({ 
      cardNum: prevState.cardNum + 1,
      answerShowing: false
    }))
  }

  correct() {
    this.setState((prevState) => ({ numCorrect: prevState.numCorrect + 1 }))
    this.nextCard()
  }

  incorrect() {
    this.nextCard()
  }

  render() {
    const { navigation, questions } = this.props
    const { deckName } = navigation.state.params
    const { cardNum, answerShowing } = this.state
    const card = questions[cardNum - 1]


    if (card === undefined) {
      return (
        <View style={styles.container}>
          <Text h2>You answered {this.state.numCorrect} question(s) correctly out of {questions.length} total.</Text>
          <Button
            buttonStyle={styles.backButton}
            onPress={() => navigation.navigate('DeckDetail', { deckName })} 
            title={`Back to ${deckName}`} />
        </View>
      )
    }

    clearLocalNotification().then(setLocalNotification)

    const { question, answer } = card

    return (
      <View style={styles.container}>
        <Text>{cardNum} / {questions.length}</Text>
        <Text h2>{question}</Text>

        {answerShowing ?  
          <View>
            <Text h2>{answer}</Text>

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
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },

  backButton: {
    backgroundColor: '#0f0'
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
  const questions = state[deckName].questions

  return { questions }
}

export default connect(mapStateToProps)(Quiz)
