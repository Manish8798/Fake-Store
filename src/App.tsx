import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from './screens/HomeScreen';
import FairdealsScreen from './screens/FairdealsScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import ReorderScreen from './screens/ReorderScreen';
import WalletScreen from './screens/WalletScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
    <View style={styles.customButton}>{children}</View>
  </TouchableOpacity>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.boldLabel,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Fairdeals':
                iconName = 'link';
                break;
              case 'Categories':
                iconName = 'grid';
                break;
              case 'Reorder':
                iconName = 'rotate-cw';
                break;
              case 'Wallet':
                iconName = 'credit-card';
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#404165',
          tabBarInactiveTintColor: '#666',
        })}>
        {/* <Tab.Screen name="Fairdeals" component={HomeScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen}
          options={{
            tabBarButton: (props) => (
              <CustomTabBarButton {...props}>
                <Text style={styles.middleButtonText}>UNIBIC</Text>
              </CustomTabBarButton>
            ),
          }}
        />
        <Tab.Screen name="Reorder" component={ReorderScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} /> */}
        <Tab.Screen name="Fairdeals" component={HomeScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen
          name="Unibic"
          component={FairdealsScreen} // Placeholder, as this button doesn’t navigate
          options={{
            tabBarButton: props => (
              <CustomTabBarButton {...props}>
                <Text style={styles.middleButtonText}>UNIBIC</Text>
              </CustomTabBarButton>
            ),
          }}
        />
        <Tab.Screen name="Reorder" component={ReorderScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 80,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    elevation: 10,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  customButtonContainer: {
    top: 4,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
  },
  customButton: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 5,
    // borderWidth: 5,
    // borderColor: '#fff',
  },
  middleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  boldLabel: {
    fontWeight: 'bold',
  },
});

export default App;
