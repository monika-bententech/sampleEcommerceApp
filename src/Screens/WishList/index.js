import React from "react";
import { View, ScrollView, Text, Pressable } from "react-native";
import { WISH_LIST, COLORS } from "../../Constants";
import WishListCard from "./WishListCard";

const WishList = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 20,
          height: 60,
          alignItems: "center",
          borderBottomWidth: 1,
          borderColor: COLORS.grey,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 18 }}>Wish List</Text>
        <Pressable>
          <Text style={{ fontWeight: "400", fontSize: 18, color: "teal" }}>
            + Create a Wish List
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
        {WISH_LIST.map((item, index) => (
          <WishListCard
            key={`${item.name}_${index}`}
            name={item.name}
            imgSrc={item.imgSrc}
            type={item.type}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default WishList;
