class DeckList extends React.Component {
  componentDidMount() {
    this.props.loadDecks()
  }
  
  render() {
    const { decks } = this.props

    return (
      <List containerStyle={styles.list}>
        {Object.keys(decks).map((deckName) => (
          <ListItem key={deckName} title={deckName} />
        ))}
      </List>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 20
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

export default connect(mapStateToProps,mapDispatchToProps)(DeckList)
