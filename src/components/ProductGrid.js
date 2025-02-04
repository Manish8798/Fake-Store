import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const products = [
  {
    id: '1',
    name: 'Sting Energy Drink Bottle..',
    volume: '250 ML',
    price: 516,
    originalPrice: 600,
    discount: '14%\nOff',
    pack: '4 Pack',
    margin: '₹2',
    mrp: '₹20',
    image: require('../assets/images/sting.png'),
  },
  {
    id: '2',
    name: 'MOUNTAIN DEW 750 ML..',
    volume: '250 ML',
    price: 516,
    originalPrice: 600,
    discount: '14%\nOff',
    pack: 'Add',
    margin: '₹2',
    mrp: '₹20',
    image: require('../assets/images/mountaindew.png'),
  },
  {
    id: '2',
    name: 'Redbull Energy Drink Bo...',
    volume: '250 ML',
    price: 516,
    originalPrice: 600,
    discount: '14%\nOff',
    pack: 'Add',
    margin: '₹2',
    mrp: '₹20',
    image: require('../assets/images/redbull.png'),
  },
  {
    id: '2',
    name: 'MOUNTAIN DEW 750 ML..',
    volume: '250 ML',
    price: 516,
    originalPrice: 600,
    discount: '14%\nOff',
    pack: 'Add',
    margin: '₹2',
    mrp: '₹20',
    image: require('../assets/images/sprite.png'),
  },
];

const ProductCard = ({ item }) => (
  <View style={{
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 20
  }}>
    <Image source={require("../assets/images/rectangleBg.png")} style={{position: "absolute", width: 166, height: 146}} />
    {/* Discount Badge */}
    {item.discount && (
      <View style={{}}>
        <Image source={require("../assets/images/discount.png")} style={{position: "absolute", top: -12, right: 0, width: 38, height: 33}} />
        <Text style={{ color: '#fff', fontSize: 8, position: "absolute", top: -2, right: 4, fontWeight: "bold" }}>{item.discount}</Text>
      </View>
    )}
    {/* Product Image */}
    <Image source={item.image} style={{ width: 100, height: 100, alignSelf: 'center' }} />
    <Text style={{ fontSize: 10, color: '#666', marginTop: 5, fontWeight: "bold", borderWidth: 0.2, alignSelf: "baseline", padding: 5, borderRadius: 10, backgroundColor: "#fff" }}>MRP: {item.mrp}</Text>
        {/* Pack & Margin Labels */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 20 }}>
      <Text style={{ backgroundColor: '#EAF1FF', padding: 5, borderRadius: 5, fontSize: 12, color: '#404165', fontWeight: "bold" }}>Pack 30</Text>
      <Text style={{ backgroundColor: '#EAF1FF', padding: 5, borderRadius: 5, fontSize: 12, color: '#404165', fontWeight: "bold" }}>Margin {item.margin}</Text>
    </View>
    <Text style={{ fontSize: 14, fontWeight: '500' }} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
    <Text style={{ fontSize: 14, color: '#666' }}>{item.volume}</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>₹{item.price} <Text style={{ textDecorationLine: 'line-through', color: '#888', fontWeight: "400" }}>₹{item.originalPrice}</Text></Text>
    </View>

    {/* Add or Pack Button & Delete Icon */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
      <TouchableOpacity style={{
        backgroundColor: item.pack === 'Add' ? '#fff' : '#388E3C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: item.pack === 'Add' ? '#D9E0E4' : '#388E3C'
      }}>
        <Text style={{ color: item.pack === 'Add' ? '#388E3C' : '#fff', fontWeight: 'bold' }}>{item.pack}</Text>
      </TouchableOpacity>
      {item.pack !== 'Add' && (
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Icon name="trash" size={20} color="#888" />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const ProductGrid = () => (
  <FlatList
    data={products}
    numColumns={2}
    renderItem={({ item }) => <ProductCard item={item} />}
    keyExtractor={(item) => item.id}
    contentContainerStyle={{ padding: 10 }}
  />
);

export default ProductGrid;
