import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const DateInput = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>When was your sunshine born?</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="DD"
          keyboardType="numeric"
          maxLength={2}
          value={day}
          onChangeText={setDay}
        />
        <TextInput
          style={styles.input}
          placeholder="MM"
          keyboardType="numeric"
          maxLength={2}
          value={month}
          onChangeText={setMonth}
        />
        <TextInput
          style={styles.input}
          placeholder="YYYY"
          keyboardType="numeric"
          maxLength={4}
          value={year}
          onChangeText={setYear}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 20,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
    width: 80, // Adjust width for better spacing
    backgroundColor: '#f9f9f9',
    marginEnd: 20,
  },
});

export default DateInput;
