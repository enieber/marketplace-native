import React from 'react';
import { Provider } from 'react-redux';

import Store from './Store';
import BaseNavigation from './Router';
const StoreInstance = Store();

const App = () => (
  <Provider store={StoreInstance}>
    <BaseNavigation />
  </Provider>
);

export default App;