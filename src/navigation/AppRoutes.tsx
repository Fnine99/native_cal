import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from 'theme';



import Home from 'screens/Home';
import Share from 'screens/Share';
import History from 'screens/History';
import User from 'screens/User';

import Icon from 'components/common/Icon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

interface TabIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

type RouteName = keyof typeof icons;

const icons = {
  Home: 'home',
  Share: 'google-analytics',
  Transactions: 'history',
  User: 'account-circle',
};

export default function HomeNav() {
    const renderTabIcon = ({ focused }:TabIconProps, routeName:RouteName) => (
      <Icon
        type="materialCommunity"
        name={icons[routeName]}
        size={focused ? 25 : 20}
        color={focused ? 'white' : theme.primary}
      />
    );
  return (
    <Tab.Navigator 
      initialRouteName='Home' 
      screenOptions={({ route }) => ({
      tabBarIcon: (props) => renderTabIcon(props, route.name),
      headerShown: false,
      tabBarActiveTintColor: theme.background.primary,
      tabBarInactiveTintColor: theme.background.primary,
      tabBarActiveBackgroundColor: theme.background.primary,
      tabBarInactiveBackgroundColor: theme.background.primary,
      tabBarShowLabel: false,
      tabBarStyle:{ borderTopWidth: 0, borderBottomWidth: 0, backgroundColor:theme.background.primary, elevation: 15}
    })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Share' component={Share} />
      <Tab.Screen name='Transactions' component={History} />
      <Tab.Screen name='User' component={User} />
    </Tab.Navigator>
  )
}
