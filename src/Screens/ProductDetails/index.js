import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { COLORS } from "../../Constants";

import style from "./style";

const ProductDetails = () => {
  const { width } = useWindowDimensions();
  const { product = {} } = useRoute().params;
  const { name = "", qty = 0, desc = "", price = 0, imgSrc = null } = product;
  const containerWidth = width;

  return (
    <ScrollView
      style={{
        flex: 1,
        width: containerWidth,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: COLORS.black, paddingVertical: 10, fontSize: 17 }}>
        {name}
      </Text>
      <Image
        style={{ width: containerWidth, height: containerWidth }}
        source={imgSrc}
      />
      <Text
        style={{ color: COLORS.black, paddingVertical: 10, fontSize: 30 }}
      >{`USD ${price}`}</Text>
      <Text
        style={{
          color: COLORS.black,
          paddingVertical: 10,
          fontSize: 20,
          textAlign: "left",
        }}
      >
        {desc}
      </Text>
      <Pressable
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange",
          borderRadius: 5,
          width: "100%",
          marginTop: 20,
        }}
      >
        <Text style={{ paddingVertical: 15, fontSize: 20 }}>
          Add to Wishlist
        </Text>
      </Pressable>
      <Pressable
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange",
          borderRadius: 5,
          marginVertical: 20,
          width: "100%",
        }}
        onPress={() => console.log("sadasd")}
      >
        <Text style={{ paddingVertical: 15, fontSize: 20 }}>Add to Cart</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductDetails;
