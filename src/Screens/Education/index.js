import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { PRODUCT_LIST, COLORS } from "../../Constants";
import VideoCard from "./VideoCard";

import style from "./style";

const { name, qty, desc, price, imgSrc } = PRODUCT_LIST[0];

const WishList = (/* { name, qty, description, price, imgSrc } */) => {
  const { width } = useWindowDimensions();
  const containerWidth = width - 40;
  const loggedInUserName = 'Patty';

  return (
    <View style={{ marginTop: 30, marginLeft: 30 }}>
      <View style={{ marginRight: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <Text style={{ fontSize: 30 }}>Hi {loggedInUserName},</Text>
          <Pressable style={{
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            marginRight: 15, backgroundColor: "#FF499E", justifyContent: "center", alignItems: "center", paddingHorizontal: 7, borderRadius: 9, height: 30
          }}>
            <Text style={{ color: "white", fontWeight: "500" }}>Resources</Text>
          </Pressable>
        </View>
        <Text>Here are all the educational videos for you to help you be a great mom to your little one! Remember to watch you recommended videos to earn Baby Points.</Text>
      </View>
      <TextInput
        style={{
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowOpacity: 0.25,
          shadowRadius: 3,
          paddingLeft: 15, paddingTop: 5, paddingRight: 15, paddingBottom: 5, marginTop: 23, marginRight: 20, height: 40, borderRadius: 25, backgroundColor: "#F2F2F2"
        }}
        placeholder={"Search"}
      // onChangeText={text => onChangeText(text)}
      // value=""
      />
      <Text style={{ fontSize: 30, marginTop: 23 }}>Recommended Videos</Text>
      <ScrollView horizontal={true} style={{ marginTop: 15 }}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </ScrollView>
      <Text style={{ fontSize: 30, marginTop: 23 }}>Other Videos</Text>
      <ScrollView horizontal={true} style={{ marginTop: 15 }}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </ScrollView>
    </View>
  );
};

export default WishList;
