import React from "react";
import { View } from "react-native";
import { Button, ButtonGroup } from "react-native-elements";
import styles from "./Style";
import Random from "./Random";
import MyList from "./MyList";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      showRandom: false,
      showMyList: true,
      selectedIndex: 0
    };

    this.handleMyListButton = this.handleMyListButton.bind(this)
    this.handleRandomButton = this.handleRandomButton.bind(this)
    this.updateIndex = this.updateIndex.bind(this)
  }

  handleMyListButton(){
    this.setState({showMyList: true, showRandom: false})
  }

  handleRandomButton(){
    this.setState({showMyList: false, showRandom: true})
  }

  updateIndex(selectedIndex){
    this.setState({selectedIndex})
  }


  render() {
    return (
      <View>

          {/*
        <View style={styles.profileButtonContainer}>
            일반 버튼을 사용하고 싶을 때
          <Button
            buttonStyle={styles.profileButton}
            title="Random"
            onPress={this.handleRandomButton}
          />
          <Button
            buttonStyle={styles.profileButton}
            title="My List"
            onPress={this.handleMyListButton}
          />
          </View>
            아래는 그룹버튼을 사용하였고 일단은 그룹버튼을 사용할 예정이다.
          */}

          <ButtonGroup
            buttons={['My List', 'Random']}
            selectedIndex={this.state.selectedIndex}
            onPress={this.updateIndex}
          />


        <View>
          {
            // 여기는 일반버튼 사용시 렌더링 this.state.showMyList ? <MyList/> : <Random/>
            // 아래는 그룹버튼 사용시 렌더링
            this.state.selectedIndex == 0 ? <MyList /> : <Random />
           }
        </View>
      </View>
    );
  }
}
