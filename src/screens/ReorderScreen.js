import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import UploadScreen from './UploadScreen';

const ReorderScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <UploadScreen />
    </SafeAreaView>
  );
};

export default ReorderScreen;
