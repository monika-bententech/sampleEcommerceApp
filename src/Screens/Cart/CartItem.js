import React, { useState } from "react";
import { View, Text, useWindowDimensions, Image, Pressable } from "react-native";
import { COLORS, PRODUCT_LIST } from "../../Constants";
import CustomIcon from "../../Components/Shared/CustomIcon";
import Styles from './style';

const CartItem = (props) => {
  const [qty, setQty] = useState(1);
  const { name, price, imgSrc } = props.item;
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
            >{`Points ${price}`}</Text>
          </View>
          <View>
            <Text style={{ color: "green", fontSize: 14 }}>In stock</Text>
          </View>
        </View>
      </View>
      <View style={Styles.qtyView}>
        <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 4, width: 70, justifyContent: "center", alignItems: "center", borderColor: "grey" }}>
          <CustomIcon style={{ paddingRight: 10, color: "grey" }} name="minus" onPress={() => setQty((prev) => prev - 1)} />
          <Text style={{ paddingRight: 10 }} >{qty}</Text>
          <CustomIcon name="plus" style={{color: "grey"}} onPress={() => setQty((prev) => prev + 1)} />
        </View>
        <Pressable style={{ marginLeft: 15, backgroundColor: "lightgrey", justifyContent: "center", alignItems: "center", borderRadius: 4, borderWidth: 1, borderColor: "grey"}}>
          <Text style={{paddingHorizontal: 20}}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;
