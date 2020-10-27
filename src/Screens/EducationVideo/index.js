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
import { SCREEN_NAMES } from '../../Constants'
import CustomVideoPlayer from "../../Components/Shared/CustomVideoPlayer";
import Video1 from "../../assets/videos/video1.mp4";
import { useNavigation } from '@react-navigation/native'

const EducationVideo = ({}) => {
    const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: "yellow" }}>
      <CustomVideoPlayer src={Video1} />
    </View>
  );
};

export default EducationVideo;
