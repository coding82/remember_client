import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./Style";

export default class Option extends React.Component {


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.content}>

          <Text style={styles.homeTitle}>C H O O S E</Text>

          <View style={styles.ButtonContainer}>


              <TouchableHighlight
              style={styles.blueButton}
              onPress={() => this.props.navigation.navigate("MyList")}
              >
                <Text style={styles.buttonText}>My List</Text>
              </TouchableHighlight>



              <TouchableHighlight
              style={styles.orangeButton}
              onPress={() => this.props.navigation.navigate("Random")}>
                <Text style={styles.buttonText}>RANDOM</Text>
              </TouchableHighlight>


          </View>

        </View>

      </View>
    );
  }
}
