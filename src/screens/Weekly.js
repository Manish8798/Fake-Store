import React from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet} from 'react-native';

const Weekly = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Weekly Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default Weekly;
