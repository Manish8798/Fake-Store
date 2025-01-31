import React from "react";
import { View, Text, Button } from "react-native";


const FairdealsScreen = ({ navigation }) => {
    return (
        <View>
        <Text>Fairdeals Screen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
        />
        </View>
    );
    };

export default FairdealsScreen;