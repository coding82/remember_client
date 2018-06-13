import React from "react";
import { View, Text, TouchableHighlight,  } from "react-native";
import styles from "./Style";
import { List, ListItem } from 'react-native-elements'

export default class MyList extends React.Component {
  constructor() {
    super();
    this.state = {
      book: "hello world",
      checked: false
    };
    this.handleChecked = this.handleChecked.bind(this);
    this.selectedTag = this.selectedTag.bind(this);
  }
  selectedTag(){

  }

  handleChecked() {

    this.setState({checked: !this.state.checked})
    this.selectedTag()
  }

  render() {
    const list = [
      {
        
      },
    ]
    return (
      <View style={styles.container}>
        <View style={styles.content}>

        <List>
          
        </List>





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
