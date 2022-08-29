import React from 'react';
import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {GestureHandlerRootView} from 'react-native-gesture-handler'; //-->add

import {store, persistor} from './redux/store';

import AppContainer from './navigators/MainStackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <SafeAreaView style={{flex: 1}}>
            <AppContainer />
          </SafeAreaView>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
