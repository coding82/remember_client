import React from "react";
import { View, FlatList } from "react-native";
import styles from "./Style";
import Start from "./Start";
import { List, ListItem, ButtonGroup } from "react-native-elements";

export default class MyList extends React.Component {
  constructor() {
    super();
    this.state = {
      book: "hello world",
      checked: false,
      selectedBook: null
    };

    this.selectBook = this.selectBook.bind(this);
    this.handleQTorGame = this.handleQTorGame.bind(this);
  }

  selectBook(id) {
    this.setState({ selectedBook: id });
  }

  handleQTorGame(id) {
    if (id == 0) this.props.navi.navigate("Start", {selectedBook: this.state.selectedBook});
  }

  render() {
    const books = this.props.books;

    return (
      <View style={styles.container}>
        <View>
          <Start book={this.state.selectedBook} />

          <List containerStyle={{ maxHeight: 200 }}>
            {books.length && (
              <FlatList
                data={books}
                renderItem={({ item }) => (
                  <ListItem
                    keyExtractor={item => item.id}
                    title={item.book}
                    subtitle={item.chapter + " : " + item.verse}
                    onPress={() => this.selectBook(item)}
                  />
                )}
              />
            )}
          </List>

          <ButtonGroup
            buttons={["Quiet Time", "Game"]}
            selectedIndex="0"
            onPress={this.handleQTorGame}
          />
        </View>
      </View>
    );
  }
}
