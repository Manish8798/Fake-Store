// CropScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CropScreen = ({route}) => {
  const {imageUri} = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.cropContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Crop</Text>
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => navigation.navigate('Preview')}>
          <Text style={styles.doneButtonText}>DONE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cropArea}>
        <Image
          source={{uri: imageUri}}
          style={styles.cropImage}
          resizeMode="contain"
        />
        <View style={styles.cropFrame} />
      </View>

      <View style={styles.slider}>
        {/* <Image
          source={require('./assets/zoom-out.png')}
          style={styles.zoomIcon}
        /> */}
        <Icon name="zoom-out" style={styles.zoomIcon} size={24} />
        <View style={styles.sliderBar}>
          <View style={styles.sliderKnob} />
        </View>
        {/* <Image
          source={require('./assets/zoom-in.png')}
          style={styles.zoomIcon}
        /> */}
        <Icon name="zoom-in" style={styles.zoomIcon} size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Crop Screen Styles
  cropContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  closeButton: {
    color: '#fff',
    fontSize: 24,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
  },
  doneButton: {
    backgroundColor: '#2D8CFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  cropArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropImage: {
    width: '100%',
    height: '100%',
  },
  cropFrame: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderWidth: 1,
    borderColor: '#fff',
  },
  slider: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  sliderBar: {
    flex: 1,
    height: 2,
    backgroundColor: '#666',
    marginHorizontal: 10,
  },
  sliderKnob: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: -9,
  },
  zoomIcon: {
    // width: 24,
    // height: 24,
    tintColor: '#fff',
  },
});

export default CropScreen;
