import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import { store } from 'store/index'

import { FirebaseProvider as AuthProvider} from 'context/FirebaseContext';

import Navigation from 'navigation';

export default function App() {

  return (
    <SafeAreaProvider>
      <Provider store={store}> 
       <AuthProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style='light' />
          <Navigation/>
        </SafeAreaView>
        </AuthProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000001',
    justifyContent: 'center',
  },
});
