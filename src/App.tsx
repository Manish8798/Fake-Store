import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

// Import your screens
import HomeScreen from './screens/HomeScreen';
import FairdealsScreen from './screens/FairdealsScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import ReorderScreen from './screens/ReorderScreen';
import WalletScreen from './screens/WalletScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Fairdeals':
                iconName = 'tag';
                break;
              case 'Categories':
                iconName = 'grid';
                break;
              case 'Reorder':
                iconName = 'rotate-cw';
                break;
              case 'Wallet':
                iconName = 'cpu';
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2962ff',
          tabBarInactiveTintColor: '#666',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Fairdeals" component={FairdealsScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Reorder" component={ReorderScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;