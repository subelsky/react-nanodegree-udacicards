import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Button, FormLabel, FormInput } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'
import { createDeck } from  './../actions'


class NewDeck extends React.Component {
  state = {
    title: ''
  }

  onChange(value) {
    this.setState({ title: value })
  }

  save() {
    this.props.createDeck(this.state.title)

    const navigateAction = NavigationActions.navigate({
      routeName: 'DeckDetail',
      params: { deckName: this.state.title },
    })

    this.props.navigation.dispatch(navigateAction)
  }

  render() {
    const { deckName, deck } = this.props

    return (
      <View style={styles.container}>
        <FormLabel>New Deck Title</FormLabel>
        <FormInput value={this.state.title} onChangeText={(e) => this.onChange(e)} />
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
    createDeck: (title) => dispatch(createDeck(title))
  }
}

export default connect(() => ({}),mapDispatchToProps)(NewDeck)
