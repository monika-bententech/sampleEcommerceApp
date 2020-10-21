import { StyleSheet } from "react-native";
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        height: height
    },
    body: {
        backgroundColor: Colors.white,
        height: height
    }
});

export default styles;