import React from "react";
import { View, Text, useWindowDimensions, Image } from "react-native";
import { COLORS, PRODUCT_LIST } from "../../Constants";


const CartItem = (props) => {
    const { name,  price, imgSrc } = props.item;
  const { width } = useWindowDimensions();
  const containerWidth = width;
  return (
    <View
      style={{
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: COLORS.grey,
        width: containerWidth,
        height: 150,
        justifyContent: "center",
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={imgSrc} style={{ height: 80, width: 80 }} />
        <View style={{ padding: 5 }}>
          <View>
            <Text
              style={{ color: COLORS.black, fontSize: 17, fontWeight: "600" }}
            >
              {name}
            </Text>
          </View>
          <View>
            <Text
              style={{ color: "brown", fontSize: 16 }}
            >{`USD ${price}`}</Text>
          </View>
          <View>
            <Text style={{ color: "green", fontSize: 14 }}>In stock</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>todo button</Text>
      </View>
    </View>
  );
};

export default CartItem;
