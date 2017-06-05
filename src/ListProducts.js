import React, { Component } from 'react';
import {
  ListView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import * as actions from './actions'
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

  addProduct(product) {    
    this.props.action.addProduct(product);
    console.log(this.props);
  }

  render() {
    return(
      <ListView
      dataSource={
        this.state.dataSource
      }
      renderRow={
        (rowData) => (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ProductDetails', {name:rowData.name})}
            >
          <Product
            key={rowData.id}
            name={rowData.name}
            price={rowData.price}
            image={rowData.image}
            description={rowData.description}
            addCart={() => this.addProduct(rowData)}
            />
          </TouchableOpacity>
          )
      } />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action:bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
