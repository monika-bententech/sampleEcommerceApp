import React, { useState } from 'react';
import { View, Text, FlatList, Alert, SafeAreaView, ScrollView } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomRadioButton from '../../Components/Shared/CustomRadioButton';
import { localData } from '../../localData';
import ScanQRModal from '../../Modals/ScanQRModal';
import { formatAMPM } from '../../Utils/date';
import styles from './styles'

const loggedInUserId = "u1";

const CalendarScreen = ({ navigation }) => {

    const [selectedDate, setSelectedDate] = useState("");
    const [markedDates, setMarkedDates] = useState({});
    const [appointments, setAppointments] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState({});
    const [selectedAppointmentType, setSelectedAppointmentType] = useState({});
    const [showScanQRModal, setShowScanQRModal] = useState(false);

    const setNewDaySelected = (date) => {
        if (date === selectedDate) {
            return;
        }
        const markedDate = Object.assign({});
        markedDate[date] = {
            customStyles: {
                container: {
                    backgroundColor: '#FDC6E0'
                },
                text: {
                    color: '#2d4150',
                }
            }
        };
        setSelectedDate(date);
        setMarkedDates(markedDate);
        setAppointments(getFilteredAppointments(date));
        setSelectedAppointment({});
        setSelectedAppointmentType({});
    };

    const getFilteredAppointments = (selectedDate) => {
        const filteredAppointments = localData.appointments.filter((appointment) => {
            let appointmentDate = new Date(Number(appointment.date_time)).toISOString().substring(0, 10);
            return appointment.user_id === loggedInUserId && appointmentDate === selectedDate;
        })

        return filteredAppointments || [];
    }

    const handleSelectAppointment = (appointment) => {
        if (selectedAppointment && selectedAppointment.id === appointment.id) {
            return;
        }
        setSelectedAppointment(appointment);

        const appointmentType = (localData.appointment_types.find((type) => type.id === appointment.type) || {});
        setSelectedAppointmentType(appointmentType);
    }

    const handleGetPointsPress = () => {
        if (selectedAppointment.pointsEarned) {
            Alert.alert("Alert", "You have already earned points for this appointment!");
            return;
        }
        setShowScanQRModal(true)
    }

    const onScanQR = () => {
        setShowScanQRModal(false)
        navigation.navigate('ScanQR')
    }

    return (
        <>
            <SafeAreaView>
                <ScrollView
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <CalendarList
                            markingType="custom"
                            markedDates={markedDates}
                            current={selectedDate}
                            pastScrollRange={24}
                            futureScrollRange={24}
                            horizontal
                            pagingEnabled
                            onDayPress={(day) => {
                                setNewDaySelected(day.dateString);
                            }}
                        />

                        <View style={{ height: 200, marginLeft: 24, backgroundColor: "white", marginRight: 24, shadowOpacity: 0.75, shadowRadius: 2, shadowColor: '#000000', shadowOffset: { height: 1, width: 0 }, elevation: 1 }}>
                            <View style={{ backgroundColor: "#04C4F4", height: 30, alignItems: "center", justifyContent: "center" }}><Text>Today's Events</Text></View>
                            <FlatList
                                style={{ margin: 5 }}
                                data={appointments}
                                renderItem={({ item, index, separators }) => {
                                    appointmentType = (localData.appointment_types.find((type) => type.id === item.type) || {});
                                    return (
                                        <View key={index}>
                                            <View style={{ backgroundColor: 'white', display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: 10, paddingBottom: 10 }}>
                                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                                    <CustomRadioButton selected={selectedAppointment && selectedAppointment.id && selectedAppointment.id === item.id} onPress={() => handleSelectAppointment(item)} />
                                                    <Text style={{ fontWeight: "600", paddingRight: 10 }}>{formatAMPM(new Date(Number(item.date_time)))}</Text>
                                                    <Text>{appointmentType.name || ""}</Text>
                                                </View>
                                                <Text style={{ fontWeight: "600" }}>{`${appointmentType.points || "0"} Points`}</Text>
                                            </View>
                                        </View>
                                    )
                                }}
                            />
                            <View style={{ alignItems: "center", paddingBottom: 10 }}>
                                <TouchableOpacity style={{ width: 100, height: 30, backgroundColor: "#04C4F4", alignItems: "center", justifyContent: "center", borderRadius: 5 }}
                                    onPress={handleGetPointsPress}
                                    disabled={selectedAppointment.id === undefined}>
                                    <Text>Get Points</Text>
                                </TouchableOpacity>
                            </View>
                            <ScanQRModal visible={showScanQRModal} onClose={() => setShowScanQRModal(false)} points={selectedAppointmentType.points || 0} appointmentType={selectedAppointmentType.name || ''} onScanQR={onScanQR}/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default CalendarScreen;
