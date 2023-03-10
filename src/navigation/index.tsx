import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useAuth from 'hooks/useAuth';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';
import SuccessRegister from 'screens/SuccessRegister';

// add splash screem
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <NavigationContainer>
      {isLoggedIn && (
        <AppRoutes/>
      )}
      {!isLoggedIn && (
        <AuthRoutes/>
      )}
    </NavigationContainer>
  );
}
