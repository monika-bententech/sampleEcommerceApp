import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { PRODUCT_LIST, COLORS } from "../../Constants";

import style from "./style";

const { name, qty, desc, price, imgSrc } = PRODUCT_LIST[0];

const WishList = (/* { name, qty, description, price, imgSrc } */) => {
  const { width } = useWindowDimensions();
  const containerWidth = width - 40;

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          paddingTop: 20,
          width: containerWidth,
          flex: 1,
        }}
      >
        <Text
          style={{ color: COLORS.black, paddingVertical: 10, fontSize: 17 }}
        >
          {name}
        </Text>
        <Image
          style={{ width: containerWidth, height: containerWidth }}
          source={imgSrc}
        />
        <Text
          style={{ color: COLORS.black, paddingVertical: 10, fontSize: 30 }}
        >{`POINTS ${price}`}</Text>
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
          }}
        >
          <Text style={{paddingVertical: 15,fontSize:20  }}>Add to Wishlist</Text>
        </Pressable>
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "orange",
            borderRadius: 5,
            marginTop:20
          }}
        >
          <Text style={{ paddingVertical: 15,fontSize:20 }}>Add to Cart</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default WishList;
