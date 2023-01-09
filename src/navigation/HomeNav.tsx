import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from 'theme';

import Home from 'screens/Home';
import Analytics from 'screens/Analytics';
import Todo from 'screens/Todo';

import Icon from 'components/common/Icon';

const Tab = createBottomTabNavigator();

export default function HomeNav() {
  return (
      <Tab.Navigator 
        initialRouteName='Home' 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'view-agenda-outline' : 'view-agenda-outline';
            } else if (route.name === 'Todo') {
              iconName = focused ? 'format-list-checks' : 'format-list-checks';
            } else if (route.name === 'Analytics') {
              iconName = focused ? 'google-analytics' : 'google-analytics';
            }
            return <Icon type={'materialCommunity'} name={iconName} size={20} color={focused ? 'white':theme.primary  } />;
          },
        headerShown: false,
        // tabBarActiveTintColor: '#000001',
        // tabBarInactiveTintColor: '#000001',
        tabBarActiveBackgroundColor: theme.backgroundColor,
        tabBarInactiveBackgroundColor: theme.backgroundColor,
        tabBarShowLabel: false,
        tabBarStyle:{ borderTopWidth: 0, elevation: 15, borderBottomWidth:0, paddingBottom:0}
      })}
      >
        <Tab.Screen name='Todo' component={Todo} />
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Analytics' component={Analytics} />
      </Tab.Navigator>
  )
}

