import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const categories = [
  { name: 'Cold Drinks Juices', image: require('../assets/images/item1.png') },
  { name: 'Biscuits Cookies', image: require('../assets/images/item2.png') },
  { name: 'Hygiene Wellness', image: require('../assets/images/item3.png') },
  { name: 'Chocolate Sweets', image: require('../assets/images/item4.png') },
  { name: 'Breakfast Sauces', image: require('../assets/images/item5.png') },
  { name: 'Packaged Food', image: require('../assets/images/item6.png') },
];

const CategoryItem = ({ item }) => (
<View style={{paddingBottom: 20}}>
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.itemImage} />
  </View>
      <Text style={styles.itemText}>{item.name}</Text>
  </View>
);

const ProductList = () => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <CategoryItem item={item} />}
      numColumns={3}
      contentContainerStyle={styles.listContainer}
      disableVirtualization
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  itemContainer: {
    backgroundColor: '#f2f2f2',
    padding: 1,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    alignItems: 'center',
    flex: 1/3,
  },
  itemImage: {
    width: 99,
    height: 100,
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center',
    color: "#000",
    opacity: 0.65,
    paddingHorizontal: 8,
    width: 99,
    fontWeight: "500"
  },
});

export default ProductList;