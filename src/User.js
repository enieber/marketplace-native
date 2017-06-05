import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class User extends Component {

  render() {
    console.log(this)
    return (
      <View>
        <Text> { props.user } </Text>
        <Text>id</Text>
      </View>
    );
  }
}

export default User;

