import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const data = [
  {
    id: '1',
    title: '₹ 5 Lakhs Health Cover @ ₹8/day*',
    subtitle: 'Health Insurance',
    icon: 'heartbeat',
    color: '#C3E5FF',
  },
  {
    id: '2',
    title: 'Early Term Insurance is a Smart Choice',
    subtitle: 'Term Life Insurance',
    icon: 'umbrella',
    color: '#D3D3FF',
  },
  {
    id: '3',
    title: 'Save tax with these 5 products',
    subtitle: 'Investment Blog',
    icon: 'piggy-bank',
    color: '#FFD3C3',
  },
  {
    id: '4',
    title: 'Plans for Commercial Taxi',
    subtitle: 'Car Insurance',
    icon: 'car',
    color: '#333540',
    textColor: '#fff',
  },
  {
    id: '5',
    title: 'Comprehensive health plans for your parent',
    subtitle: 'Health Insurance',
    icon: 'user-md',
    color: '#FFF3C3',
  },
  {
    id: '6',
    title: 'Now, you can insure your spouse as well',
    subtitle: 'Term Life Insurance',
    icon: 'users',
    color: '#E3D3FF',
  },
];

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Health', {item})}
      style={[styles.card, {backgroundColor: item.color, height: item.height}]}>
      <Icon
        name={item.icon}
        size={30}
        color={item.textColor || '#333'}
        style={styles.icon}
      />
      <Text style={[styles.subtitle, {color: item.textColor || '#666'}]}>
        {item.subtitle}
      </Text>
      <Text style={[styles.title, {color: item.textColor || '#000'}]}>
        {item.title}
      </Text>
      <Image
        source={require('../assets/images/placeholder.png')}
        resizeMode="contain"
        style={{
          width: 200,
          height: 100,
          paddingTop: 20,
        }}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2} // Creates a grid-like structure
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 100,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    justifyContent: 'space-between',
    elevation: 2,
    marginVertical: 20,
    paddingTop: 20,
    paddingBottom: 2,
  },
  icon: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});

export default HomeScreen;
