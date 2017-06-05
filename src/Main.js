import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListProducts from './ListProducts';

class Main extends Component {
  
  render() {
      return (
        <ListProducts navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
      );
    }
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
  };
};

export default connect(mapStateToProps)(Main);
