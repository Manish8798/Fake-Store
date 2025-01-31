import React from "react";
import { View, Text, Button } from "react-native";


const ReorderScreen = ({ navigation }) => {
    return (
        <View>
        <Text>Reorder Screen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
        />
        </View>
    );
    };

export default ReorderScreen;