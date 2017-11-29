import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Button, FormLabel, FormInput } from 'react-native-elements'
import { createQuestion } from  './../actions'

class NewCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  onChangeQuestion(value) {
    this.setState({ question: value })
  }

  onChangeAnswer(value) {
    this.setState({ answer: value })
  }

  save() {
    const { deckName } = this.props.navigation.state.params
    const question = this.state
    
    this.props.createQuestion(deckName,question)
    this.props.navigation.navigate('DeckDetail',{ deckName })
  }

  render() {
    const { question, answer } = this.state

    return (
      <View style={styles.container}>
        <FormLabel>Question</FormLabel>
        <FormInput value={question} onChangeText={(e) => this.onChangeQuestion(e)} />

        <FormLabel>Answer</FormLabel>
        <FormInput value={answer} onChangeText={(e) => this.onChangeAnswer(e)} />

        <Button title='Save' onPress={() => this.save()} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    createQuestion: (deckName,question) => dispatch(createQuestion(deckName,question))
  }
}

export default connect(() => ({}),mapDispatchToProps)(NewCard)

