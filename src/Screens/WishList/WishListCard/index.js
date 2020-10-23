import React from "react";
import {
  TouchableOpacity,
  Text,
  useWindowDimensions,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SCREEN_NAMES } from "../../../Constants";

const WishListCard = ({ name, imgSrc, type }) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const containerWidth = width;

  return (
    <TouchableOpacity
      style={{
        height: 75,
        borderBottomWidth: 1,
        borderColor: COLORS.grey,
        padding: 5,
        width: containerWidth,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
      onPress={() => navigation.navigate(SCREEN_NAMES.viewWishLists)}
    >
      <View>
        <Image style={{ height: 50, width: 50 }} source={imgSrc} />
      </View>
      <View style={{ padding: 5, paddingLeft: 10 }}>
        <View>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>{name}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "300", fontSize: 14 }}>{type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WishListCard;
