import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

const ProductDetails = ({ navigation }) => (      
        <Text
        style={{
            color: '#463239',
            }}>
            {
              ` Test ${navigation.state.params.name}` 
          }
        </Text>
    );

export default ProductDetails;

