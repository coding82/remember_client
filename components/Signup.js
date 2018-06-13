import React from 'react';
import {  View } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import styles from './Style';

export default class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      nickname: '',
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNicknameChange = this.handleNicknameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleSubmit(){
    const { nickname, email, password } = this.state;
    return this.props.navigation.navigate('Option')
  }

  handleEmailChange(value) {
    this.setState({ email: value })
  }

  handleNicknameChange(value) {
    this.setState({ nickname: value })
  }

  handlePasswordChange(value) {
    this.setState({ password: value })
  }

  render(){
      console.log(this.state)
    return(
      <View>
         <FormLabel>Nickname</FormLabel>
        <FormInput
          placeholder="Nickname"
          onChangeText={this.handleNicknameChange}
        />

        <FormLabel>Email</FormLabel>
        <FormInput
          placeholder="Email"
          onChangeText={this.handleEmailChange}
        />


        <FormLabel>Password</FormLabel>
        <FormInput
          placeholder="Password"
          onChangeText={this.handlePasswordChange}
        />

        <Button
          buttonStyle={styles.singleButton}
          title="Sign Up"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}
