import React, { Component } from 'react';
import {
  ListView,
  Text,
} from 'react-native';

import User from './User';

class ListUsers extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
   this.state = {
     dataSource: ds.cloneWithRows(['User 1', 'User 2']),
   };   
  }

  render() {
    return(
      <ListView
      dataSource={
        this.state.dataSource
      }
      renderRow={
        (rowData) => <Text>{rowData}</Text>
      } />
    )
  }
}

export default ListUsers;

