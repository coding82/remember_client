import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./Style";

export default class Home extends React.Component {


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.content}>

          <Text style={styles.homeTitle}>R E M E M B E R</Text>

          <View style={styles.ButtonContainer}>


              <TouchableHighlight
              style={styles.blueButton}
              onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableHighlight>



              <TouchableHighlight
              style={styles.orangeButton}
              onPress={() => this.props.navigation.navigate("Signup")}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableHighlight>


          </View>

        </View>

      </View>
    );
  }
}
