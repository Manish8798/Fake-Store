import React from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet} from 'react-native';

const Monthly = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Monthly Screen</Text>
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

export default Monthly;
