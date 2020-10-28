import React, { useState } from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";
import ResourceCard from "./ResourceCard"

const EducationVideo = ({ videoData, watched }) => {
  const navigation = useNavigation()
  const { width } = useWindowDimensions()
  const [hasWatched, setHasWatched] = useState(watched || false);
  const [showCompleteVideoModal, setShowCompleteVideoModal] = useState(false);
  const [takeQuiz, setTakeQuiz] = useState(false);
  const { title, description, points, videoStreem } = videoData || {};

  const handleOnEnd = () => {
    setHasWatched(true);
  }

  const handleOnQuizClick = () => {
    hasWatched ? setTakeQuiz(true) : setShowCompleteVideoModal(true);
    // setTakeQuiz(true);
  }

  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ marginRight: 30, marginLeft: 30, marginTop: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 30 }}>{title}Safe to Sleep</Text>
          <Text style={{ fontSize: 17, fontWeight: "500" }}>50 points</Text>
        </View>
        <Text style={{ marginTop: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Test asd sdf e Integer convallis ultricies nulla, eget consequat erat vestibulum consectetur.</Text>
      </View>
      <CustomVideoPlayer style={{ marginTop: 30 }} height={270} width={width} controls={true} src={Video1} onEnd={handleOnEnd} />
      <Pressable style={{
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        margin: 30,
        marginBottom: 25,
        backgroundColor: "#FF499E", justifyContent: "center", alignItems: "center", paddingHorizontal: 7, borderRadius: 9,
        height: 50
      }}
        onPress={handleOnQuizClick}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>Quiz</Text>
      </Pressable>
      <View style={{ marginHorizontal: 30 }}>
        <Text style={{ fontSize: 30 }}>Resources</Text>
        <ScrollView horizontal={true}>
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </ScrollView>
      </View>
      <Modal
        isVisible={showCompleteVideoModal}
        onBackdropPress={() => setShowCompleteVideoModal(false)}
      >
        <View style={{ height: "18%", backgroundColor: "white", borderRadius: 6 }}>
          <Pressable style={{ flexDirection: "", justifyContent: "flex-end" }}
            onPress={() => setShowCompleteVideoModal(false)}
          >
            <Text style={{ position: "absolute", right: 9, top: 6, fontSize: 30 }}>X</Text>
          </Pressable>
          <View style={{ alignItems: "center", }}>
            <Text style={{ fontSize: 30, marginTop: 15, fontWeight: "bold" }}>Video Time</Text>
            <Text style={{ fontSize: 20, lineHeight: 26, marginTop: 20, paddingHorizontal: 20, textAlign: "center" }}>You need to watch the video first before taking this quiz</Text>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={takeQuiz}
        onBackdropPress={() => setTakeQuiz(false)}
      >
        <View style={{ height: "18%", backgroundColor: "white", borderRadius: 6 }}>
          <Pressable style={{ flexDirection: "", justifyContent: "flex-end" }}
            onPress={() => setShowCompleteVideoModal(false)}
          >
            <Text style={{ position: "absolute", right: 9, top: 6, fontSize: 30 }}>X</Text>
          </Pressable>
          <View style={{ alignItems: "center", }}>
            <Text style={{ fontSize: 30, marginTop: 15, fontWeight: "bold" }}>Take the Quiz</Text>
            <Text style={{ fontSize: 20, lineHeight: 26, marginTop: 20, paddingHorizontal: 20, textAlign: "center" }}>You need to watch the video first before taking this quiz</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EducationVideo;
