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
    const {width}  = useWindowDimensions()
   
  return (
    <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
      <CustomVideoPlayer height={300} width={width} controls={true} src={Video1} />
    </View>
  );
};

export default EducationVideo;
