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

const EducationVideo = ({ videoData }) => {
  const navigation = useNavigation()
  const { width } = useWindowDimensions()
  const { title, description, points, videoStreem } = videoData || {};

  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ marginRight: 30, marginLeft: 30, marginTop: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 30 }}>{title}asdf</Text>
          <Text style={{ fontSize: 17, fontWeight: "500" }}>50 points</Text>
        </View>
        <Text style={{marginTop: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Test asd sdf e Integer convallis ultricies nulla, eget consequat erat vestibulum consectetur.</Text>
      </View>
      <CustomVideoPlayer style={{ marginTop: 30 }} height={300} width={width} controls={true} src={Video1} />
      <Pressable style={{
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        margin: 30,
        backgroundColor: "#FF499E", justifyContent: "center", alignItems: "center", paddingHorizontal: 7, borderRadius: 9,
        height: 50
      }}>
        <Text style={{ color: "white", fontWeight: "500" }}>Quiz</Text>
      </Pressable>
    </View>
  );
};

export default EducationVideo;
