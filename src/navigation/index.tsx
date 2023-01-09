import { NavigationContainer } from '@react-navigation/native';

import useAuth from 'hooks/useAuth';

import AuthNav from './AuthNav';
import HomeNav from './HomeNav';

// add splash screem

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <NavigationContainer>{isLoggedIn ? <HomeNav/>:<AuthNav/>}</NavigationContainer>
  );
}
