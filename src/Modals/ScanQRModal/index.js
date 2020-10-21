import React, { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import Modal from 'react-native-modal';
import styles from './styles';

const ScanQRModal = (props) => {
    const { visible, onClose, appointmentType, points, onScanQR } = props;
    return (
        <Modal isVisible={visible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{appointmentType}</Text>
                    <Text style={styles.modalText}>{`Scan QR and get ${points} points`}</Text>
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={onScanQR}
                    >
                        <Text style={styles.textStyle}>Scan QR</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
};

export default ScanQRModal