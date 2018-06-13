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
    const books = this.props.books;
    return (
      <View style={styles.container}>
        <View style={styles.content}>

        <List>
          {
            books && books.map( item =>
              <ListItem
                key={item.id}
                title={item.chapter}
              />
            )
          }
        </List>




        </View>
      </View>
    );
  }
}
