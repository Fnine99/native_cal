import { Fragment, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics, SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from 'store/index'

import { FirebaseProvider as AuthProvider} from 'context/FirebaseContext';

import Navigation from 'navigation';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}> 
       <AuthProvider>
        <Fragment>
          <Navigation/>
        </Fragment>
        </AuthProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
