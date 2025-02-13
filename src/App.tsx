import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from './screens/HomeScreen';
import FairdealsScreen from './screens/FairdealsScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import ReorderScreen from './screens/ReorderScreen';
import WalletScreen from './screens/WalletScreen';
import Health from './screens/Health';
import UploadScreen from './screens/UploadScreen';
import CropScreen from './screens/CropScreen';
import PreviewScreen from './screens/PreviewScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
    <View style={styles.hexagonContainer}>
      <View style={styles.hexagon}>
        <View style={styles.hexagonInner}>
          <Icon name="list" size={20} color="#fff" />
        </View>
        <View style={styles.hexagonBefore} />
        <View style={styles.hexagonAfter} />
      </View>
    </View>
    <Text style={styles.customButtonText}>Policies</Text>
  </TouchableOpacity>
);

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Health" component={Health} />
      {/* <Stack.Screen name="Upload" component={UploadScreen} />
      <Stack.Screen name="CropScreen" component={CropScreen} />
      <Stack.Screen name="Preview" component={PreviewScreen} /> */}
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AccountMain" component={ReorderScreen} />
      <Stack.Screen name="Upload" component={UploadScreen} />
      <Stack.Screen name="CropScreen" component={CropScreen} />
      <Stack.Screen name="Preview" component={PreviewScreen} />
    </Stack.Navigator>
  );
};

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
              case 'Home':
                iconName = 'home';
                break;
              case 'Claims':
                iconName = 'flag';
                break;
              case 'Account':
                iconName = 'user';
                break;
              case 'Help':
                iconName = 'help-with-circle';
                break;
            }
            return focused ? (
              <Icon name={iconName} size={size} color={color} />
            ) : (
              <Feather name={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: '#2070F0',
          tabBarInactiveTintColor: '#666',
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Claims" component={CategoriesScreen} />
        <Tab.Screen
          name="Policies"
          component={FairdealsScreen}
          options={{
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen name="Account" component={AccountStack} />
        <Tab.Screen name="Help" component={WalletScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  customButtonContainer: {
    top: -16.5, // Adjust height positioning if needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  hexagonContainer: {
    width: 50, // Reduce width
    height: 50, // Reduce height
    justifyContent: 'center',
    alignItems: 'center',
  },
  hexagon: {
    width: 40, // Decrease width
    height: 24, // Decrease height
    backgroundColor: '#6D28D9',
    position: 'relative',
  },
  hexagonInner: {
    width: 40, // Match hexagon width
    height: 24, // Match hexagon height
    backgroundColor: '#6D28D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hexagonBefore: {
    position: 'absolute',
    top: -12, // Adjust based on height
    left: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 20, // Adjust proportionally
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderBottomWidth: 12, // Adjust proportionally
    borderBottomColor: '#6D28D9',
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -12, // Adjust based on height
    left: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderTopWidth: 12,
    borderTopColor: '#6D28D9',
  },
  customButtonText: {
    marginTop: 5, // Reduce space between hexagon and text
    fontSize: 10.5, // Reduce text size
    fontWeight: '600',
    color: '#666',
  },
});

export default App;
