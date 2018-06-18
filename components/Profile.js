import React from "react";
import { View, Text } from "react-native";
import { Button, ButtonGroup } from "react-native-elements";
import styles from "./Style";
import Random from "./Random";
import MyList from "./MyList";
import { connect } from "react-redux";
import { allBooksThunk } from "../store";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      showRandom: false,
      showMyList: true,
      selectedIndex: 0,
      naviIdx: -1
    };

    this.handleMyListButton = this.handleMyListButton.bind(this);
    this.handleRandomButton = this.handleRandomButton.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.navigateQT_Game = this.navigateQT_Game.bind(this);
  }

  componentDidMount() {
    this.props.allBooksThunk();
  }

  handleMyListButton() {
    this.setState({ showMyList: true, showRandom: false });
  }

  handleRandomButton() {
    this.setState({ showMyList: false, showRandom: true });
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  navigateQT_Game(naviIdx) {
    if (naviIdx === 1) return this.props.navigation.navigate("Login");
  }

  render() {
    const books = this.props.book;
    return (
      <View>


        <ButtonGroup
          buttons={["My List", "Random"]}
          selectedIndex={this.state.selectedIndex}
          onPress={this.updateIndex}
        />

        <View>
          {this.state.selectedIndex == 0 ? (
            <MyList navi={this.props.navigation} books={books} />
          ) : (
            <Random />
          )}
        </View>
      </View>
    );
  }
}

const mapState = state => ({
  book: state.book
});

const mapDispatch = dispatch => ({
  allBooksThunk: () => dispatch(allBooksThunk())
});

export default connect(
  mapState,
  mapDispatch
)(Profile);
