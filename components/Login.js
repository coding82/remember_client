import React from 'react';
import {  View } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import styles from './Style';

export default class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    const { email, password } = this.state;
    return this.props.navigation.navigate('Profile')

  }

  handleEmailChange(value) {
    this.setState({ email: value })
  }

  handlePasswordChange(value) {
    this.setState({ password: value })
  }

  render(){
      console.log(this.state)
    return(
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput
          type="text"
          name="email"
          placeholder="Email"
          onChangeText={this.handleEmailChange}
        />


        <FormLabel>Password</FormLabel>
        <FormInput

          type="password"
          name="password"
          placeholder="Password"
          onChangeText={this.handlePasswordChange}
        />

        <Button
          buttonStyle={styles.singleButton}
          title="Log in"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}
