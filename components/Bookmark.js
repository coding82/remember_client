import React from "react";
import { View, Text, TouchableHighlight, SectionList,  } from "react-native";
import styles from "./Style";
import { CheckBox } from 'react-native-elements'

export default class Bookmark extends React.Component {
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

  handleChecked(event) {

    this.setState({checked: !this.state.checked})
    this.selectedTag()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <CheckBox
            containerStyle={styles.booklist}
            title='hi'
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
            onPress={this.handleChecked}
          />

          <CheckBox
            containerStyle={styles.booklist}
            title={this.state.book}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
            onPress={this.handleChecked}
          />

          <CheckBox
            containerStyle={styles.booklist}
            title={this.state.book}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
            onPress={this.handleChecked}
          />


          {
            this.state.checked &&
            <View>
              <Text>{this.state.book}</Text>
            </View>
          }
          <SectionList
            renderItem={({ item, index, section }) => (
              <Text key={index}>{item}</Text>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ fontWeight: "bold" }}>{title}</Text>
            )}
            sections={[
              { title: "Title1", data: ["item1", "item2"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title3", data: ["item5", "item6"] }
            ]}
            keyExtractor={(item, index) => item + index}
          />



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
