import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

const CategoriesScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Claims Screen</Text>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
