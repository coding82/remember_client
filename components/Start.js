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
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Today's Word</Text>
          <Text>{this.state.book}</Text>
          <TouchableHighlight>
            <Text style={styles.blueButton}>Game</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
