import React, { Component } from 'react';
import {
  ListView,
  Text,
} from 'react-native';
import Product from './Product';
import { getProducts } from './api';

class ListProducts extends Component {
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
    this.productsList();
  }

  async productsList() {
    try {
      const products = await getProducts()
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.setState({
        dataSource: ds.cloneWithRows(products.data),
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

export default ListProducts;

