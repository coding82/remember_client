import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      book: "The LORD is my shepherd, I lack nothing."
    };
  }

  render() {
    return (
      <View>
        <View>
          <Text>This is Game Component</Text>
          {
            this.state.book.split(' ').map(word => {
              return <Text>{word}</Text>
            })
          }
        </View>
      </View>
    );
  }
}
