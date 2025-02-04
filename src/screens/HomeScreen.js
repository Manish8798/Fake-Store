import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
           <SearchBar />
           <ScrollView>
           <View style={styles.hStack}>
             <Text style={styles.heading}>Explore by Categories</Text>
             <TouchableOpacity>
               <Text style={styles.seeAll}>See All > </Text>
             </TouchableOpacity>
           </View>
           <ProductList/>
           <Text style={[styles.heading, { paddingHorizontal: 15}]}>Trending in your area</Text>
           </ScrollView>
        </SafeAreaView>
    );
};  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    hStack: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        marginTop: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1D1E29"
    },
    seeAll: {
        color: "#8B8C99",
        fontWeight: "bold",

    }
});

export default HomeScreen;