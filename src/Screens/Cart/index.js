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
  let totalPointsInCart = 0;
  const redeemablePoints = 1254;
  PRODUCT_LIST.forEach((item) => totalPointsInCart += item.price)
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
        <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>Redeemable Points: </Text>
          <Text style={{ fontSize: 20, color: "brown" }}>{redeemablePoints}</Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>{totalPointsInCart} </Text>
          <Text>Points worth items has been added to cart</Text>
        </View>
        {(redeemablePoints < totalPointsInCart) ? <Text style={{color: "red"}}>Add {totalPointsInCart - redeemablePoints} points to proceed</Text> : null}
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
