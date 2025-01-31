import React from "react";
import { View, Text, Button } from "react-native";


const CategoriesScreen = ({ navigation }) => {
    return (
        <View>
        <Text>Categories Screen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
        />
        </View>
    );
    };  


export default CategoriesScreen;