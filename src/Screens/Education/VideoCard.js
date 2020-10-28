import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import thuimbnail1 from "../../assets/Images/thumnail1.jpg";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_NAMES } from "../../Constants";

const VideoCard = ({ data }) => {
  const { title, description, points, videoStreem } = data || {};
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate(SCREEN_NAMES.educationvideo, {
        videoData: data
    });
  };

  return (
    <TouchableOpacity
      style={{
        marginRight: 25,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }}
      onPress={handleOnPress}
    >
      <Text
        style={{
          padding: 5,
          borderRadius: 3,
          position: "absolute",
          fontSize: 12,
          top: 0,
          right: 0,
          zIndex: 20,
          backgroundColor: "rgba(255, 255, 255, 0.45)",
        }}
      >
        50pts
      </Text>
      <Image style={{ height: 180, borderRadius: 3 }} source={thuimbnail1} />
      <Text
        style={{
          padding: 5,
          height: "25%",
          width: "100%",
          borderRadius: 3,
          position: "absolute",
          fontSize: 12,
          bottom: 0,
          zIndex: 20,
          backgroundColor: "rgba(255, 255, 255, 0.45)",
        }}
      >
        Safe to Sleep
      </Text>
      <Text
        style={{
          position: "absolute",
          bottom: 3,
          right: 3,
          fontSize: 12,
          zIndex: 21,
        }}
      >
        8:00
      </Text>
    </TouchableOpacity>
  );
};

export default VideoCard;
