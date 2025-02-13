// UploadScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateInput from '../components/DateInput';

const UploadScreen = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');

  const navigation = useNavigation();

  const selectImage = async () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      mediaType: 'photo',
    };

    const result = await launchImageLibrary(options);
    console.log('image', result);
    if (result.assets?.[0]?.uri) {
      navigation.navigate('CropScreen', {imageUri: result.assets[0].uri});
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contest Name</Text>

      <TouchableOpacity style={styles.uploadContainer} onPress={selectImage}>
        <View style={styles.uploadBox}>
          {/* <Image 
            source={require('./assets/upload-icon.png')} 
            style={styles.uploadIcon}
          /> */}
          <Icon name="file-upload" style={styles.uploadIcon} size={50} />
          <Text style={styles.uploadText}>Upload your child photo</Text>
          <Text style={styles.uploadSubText}>
            Image weight : Max 5 MB{'\n'}
            Image Format : JPG & PNG
          </Text>
        </View>
      </TouchableOpacity>

      <Text style={{fontWeight: '600', fontSize: 18}}>
        Tell us more about our munchkin
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter your little one's name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />

        {/* <Text style={styles.inputLabel}>When was your sunshine born?</Text> */}
        {/* Add DatePicker component here */}
        <DateInput />
      </View>

      <View style={styles.rulesContainer}>
        <Text style={styles.rulesTitle}>Rules of the Game</Text>
        <Text style={styles.rulesText}>
          Lorem ipsum lorem ipsuma lorem ipsuma lorem ipsuma lorem ipsuma lorem
        </Text>

        <Text style={styles.rulesTitle}>The Fine Print</Text>
        <Text style={styles.rulesText}>
          Lorem ipsum lorem ipsuma lorem ipsuma lorem ipsuma lorem ipsuma lorem
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  uploadContainer: {
    marginVertical: 20,
  },
  uploadBox: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  uploadIcon: {
    // width: 50,
    // height: 50,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  uploadSubText: {
    color: '#666',
    textAlign: 'center',
  },
  inputContainer: {
    marginVertical: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 20,
  },
  rulesContainer: {
    marginVertical: 20,
  },
  rulesTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  rulesText: {
    color: '#666',
    marginBottom: 20,
  },
  //   inputLabel: {
  //     fontSize: 16,
  //     fontWeight: 'bold',
  //     marginBottom: 8,
  //   },
  dateInput: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});

export default UploadScreen;
