import React from "react";
import {
  View,
  Text,
  Pressable,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import CartItem from "./CartItem";
import { PRODUCT_LIST } from "../../Constants";
const Cart = () => {
  const { width } = useWindowDimensions();
  const containerWidth = width;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          width: "100%",
        }}
      >
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "orange",
            borderRadius: 5,
            width: "100%",
            marginVertical: 20,
          }}
        >
          <Text style={{ paddingVertical: 15, fontSize: 20 }}>
            Proceed to Buy
          </Text>
        </Pressable>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {PRODUCT_LIST.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Cart;
