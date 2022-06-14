import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {RootNavigator} from './src/routes';
import {Provider as StoreProvider, useSelector} from 'react-redux';

import {store} from './src/store';
const App = () => {
  return (
    <StoreProvider store={store}>
      <RootNavigator />
    </StoreProvider>
  );
};

export default App;
