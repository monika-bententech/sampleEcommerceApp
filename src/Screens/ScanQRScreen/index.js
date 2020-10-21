import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Vibration
} from 'react-native';

import { RNCamera } from 'react-native-camera';
import styles from './styles';

let camera = null;

const ScanQRScreen = ({ navigation }) => {

    const [scanQR, setScanQR] = useState(true);
    const [qrData, setQRData] = useState({});

    const onQRCodeRead = (event) => {
        if (!event.data) {
            return;
        }
        console.log(event.data);
        setQRData({ data: event.data });
        setScanQR(false);
    }

    const handleScanAgain = () => {
        setQRData({});
        setScanQR(true);
        navigation.navigate('CalendarStack', { screen: 'Calendar' })
    }

    return (
        <>
            <SafeAreaView>
                <ScrollView
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        {scanQR && <View style={[styles.sectionContainer, { width: "100%", height: 400 }]}>
                            <RNCamera
                                ref={ref => {
                                    camera = ref;
                                }}
                                style={styles.preview}
                                type={RNCamera.Constants.Type.back}
                                flashMode={RNCamera.Constants.FlashMode.on}
                                androidCameraPermissionOptions={{
                                    title: 'Permission to use camera',
                                    message: 'We need your permission to use your camera',
                                    buttonPositive: 'Ok',
                                    buttonNegative: 'Cancel',
                                }}
                                captureAudio={false}
                                onBarCodeRead={onQRCodeRead}
                            />
                        </View>}
                        {!scanQR && <>
                            <Text>Congratulations!</Text>
                            <TouchableOpacity style={{ width: 100, height: 30, backgroundColor: "#04C4F4", alignItems: "center", justifyContent: "center", borderRadius: 5 }}
                                onPress={handleScanAgain}>
                                <Text>Scan Again</Text>
                            </TouchableOpacity>
                        </>

                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default ScanQRScreen;
