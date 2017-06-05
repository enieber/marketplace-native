import React, { Component } from 'react';
import {
  ListView,
  Text,
} from 'react-native';
import Product from './Product';
import { users } from './api';
import User from './User';

class ListUsers extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
    dataSource: ds.cloneWithRows(['use1', 'user3']),
    };   
  }

  componentWillMount() {
    this.getUsers();
  }

  async getUsers() {
    try {
      const s = await users()
      console.log(s.data)
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.setState({
        dataSource: ds.cloneWithRows(s.data),
      })
    } catch(err) {
      alert(err);
    }

  }

  render() {
    return(
      <ListView
      dataSource={
        this.state.dataSource
      }
      renderRow={
        (rowData) => (
          <Product
            key={rowData.id}
            name={rowData.name}
            price={rowData.price}
            image={rowData.image}
            description={rowData.description}
            />
          )
      } />
    )
  }
}

export default ListUsers;

