import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Choose appropriate icon pack

const StepCountHeader = () => {
  const [selected, setSelected] = useState('steps');

  const tabs = [
    {id: 'steps', icon: 'walking'},
    {id: 'run', icon: 'running'},
    {id: 'calories', icon: 'fire'},
    {id: 'sleep', icon: 'bed'},
    {id: 'food', icon: 'utensils'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.iconWrapper,
              selected === tab.id ? styles.activeIconWrapper : null,
            ]}
            onPress={() => setSelected(tab.id)}>
            <Icon
              name={tab.icon}
              size={25}
              color={selected === tab.id ? '#3E54AC' : '#FFFFFF'}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.stepCountText}>Step Count</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2070F0',
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  iconWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    padding: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
  },
  activeIconWrapper: {
    backgroundColor: '#FFFFFF',
  },
  stepCountText: {
    marginTop: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StepCountHeader;
