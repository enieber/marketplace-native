import { StackNavigator } from 'react-navigation';

import ListProducts from './ListProducts';
import ProductDetails from './ProductDetails';

const BaseNavigation = StackNavigator({
  ListProducts: {
    screen: ListProducts,
    navigationOptions: {
        header: null,
      },
    },
  ProductDetails: { screen: ProductDetails },
});

export default BaseNavigation;