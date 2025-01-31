import React from "react";
import { View, Text, Button } from "react-native";


const WalletScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Wallet Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default WalletScreen;