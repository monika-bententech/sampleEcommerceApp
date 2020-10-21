import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#04C4F4',
    },
});

export default styles;