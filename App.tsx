import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import store from 'context/store'

import Login from 'screens/Login';
import Home from 'screens/Home';
import Analytics from 'screens/Analytics';
import Setup from 'screens/Setup';

// temporary login state
const isLoggedIn = true;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style='auto' />
          {
            isLoggedIn ? (
              <NavigationContainer>
                <Tab.Navigator initialRouteName='Home'>
                  <Tab.Screen name='Setup' component={Setup} />
                  <Tab.Screen name='Home' component={Home} />
                  <Tab.Screen name='Analytics' component={Analytics} />
                </Tab.Navigator>
              </NavigationContainer>
            ) : (
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
              </NavigationContainer>
            )
          }
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
