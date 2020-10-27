import React from "react";
import { View } from "react-native";
import Video from "react-native-video";
const CustomVideoPlayer = ({ src, height, width }) => {
  const containerWidth = width || 400;
  const containerHeight = (height || 300) + 100;

  return (
    <View
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
    >
      <Video
        resizeMode={"stretch"}
        style={{ height, width: containerWidth }}
        source={src}
      />
    </View>
  );
};

export default CustomVideoPlayer;
