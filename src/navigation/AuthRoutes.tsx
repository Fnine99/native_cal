import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboard from 'screens/Onboard'
import Login from 'screens/Login';
import Register from 'screens/Register'
import EmailVerif from 'screens/EmailVerif'
import SuccessRegister from 'screens/SuccessRegister';



const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name='Success' component={SuccessRegister} /> */}
      <Stack.Screen name='Onboard' component={Onboard} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Email' component={EmailVerif} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
}
