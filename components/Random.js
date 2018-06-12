import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./Style";

export default class Random extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Here is Random Component</Text>

          <View style={styles.ButtonContainer}>

            <TouchableHighlight
              style={styles.blueButton}
              onPress={() => this.props.navigation.navigate("Start")}
            >
              <Text style={styles.buttonText}>START</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.orangeButton}
              onPress={() => this.props.navigation.navigate("Game")}
            >
              <Text style={styles.buttonText}>Game</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
