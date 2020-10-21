import React from 'react';
import { View } from 'react-native';
import CustomTouchableOpacity from '../CustomTouchableOpacity'
import styles from './styles';

const CustomRadioButton = (props) => {
    const { selected, onPress } = props;

    return (
        <View style={styles.buttonContainer}>
            <CustomTouchableOpacity
                style={styles.circle}
                onPress={onPress}
            >
                {selected && <View style={styles.checkedCircle} />}
            </CustomTouchableOpacity>
        </View>
    );
}

export default CustomRadioButton;