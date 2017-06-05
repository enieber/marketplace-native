import { StackNavigator } from 'react-navigation';

import Main from './Main';
import ProductDetails from './ProductDetails';

const BaseNavigation = StackNavigator({
  Main: { screen: Main },
  ProductDetails: { screen: ProductDetails },
});

export default BaseNavigation;