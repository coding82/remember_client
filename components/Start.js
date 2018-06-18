import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./Style";

export default class Start extends React.Component {
  constructor() {
    super();
    this.state = {
      book: "The LORD is my shepherd, I lack nothing."
    };
  }

  render() {
    const selectedBook = this.props.book
    // const theBook = this.props.navigation.state.params.selectedBook

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {/* <Text>Today's Word</Text>
          <Text>{this.state.book}</Text>
          <TouchableHighlight>
          <Text style={styles.blueButton}>Game</Text>
        </TouchableHighlight> */}
          {selectedBook ? (
            <View>
              <Text>{selectedBook.book}</Text>
              <Text>{selectedBook.chapter}</Text>
              <Text>{selectedBook.verse}</Text>
            </View>
          ) : (
            <View>
              <Text>Today's QT</Text>
            </View>
          )

        }

        </View>


      </View>
    );
  }
}
