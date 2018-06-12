import React from 'react';
import {  KeyboardAvoidingView, View, Text, TouchableHighlight, TextInput } from 'react-native'
import { Card, Button, FormLabel, Input } from 'react-native-elements';


export default class Login extends React.Component {

  render(){
    return(
      <View >
        <Card>
          <FormLabel>Email</FormLabel>
          <Input />
        </Card>
      </View>
    )
  }
}
