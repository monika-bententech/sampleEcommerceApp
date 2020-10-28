import React from "react";
import { View, Text, Image } from "react-native";
import Resource from "../../assets/Images/Resource.jpg";

export default () => {
  return (
    <View style={
      {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor: "#F6F6F6",
        width: 120,
        marginVertical: 10,
        alignItems: "center",
        borderRadius: 6,
        marginRight: 13
      }
    }>
      <View
        style={{ margin: 10, marginTop: 5 }}
      >
        <Image
          style={{ height: 90, width: 110, borderRadius: 3 }}
          source={Resource} />
      </View>
      <Text style={{ marginBottom: 5, fontSize: 18 }}>Lorem ipsum</Text>
    </View>
  )
}
