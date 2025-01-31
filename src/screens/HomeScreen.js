import React from "react";
import { View, Text, Button } from "react-native";


const HomeScreen = ({ navigation }) => {
    return (
        <View>
        <Text>Home Screen</Text>
        <Button
            title="Go to Wallet"
            onPress={() => navigation.navigate("Wallet")}
        />
        <Button
            title="Go to Reorder"
            onPress={() => navigation.navigate("Reorder")}
        />
        </View>
    );
    };  

export default HomeScreen;