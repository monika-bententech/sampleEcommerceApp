import 'react-native-gesture-handler';

import React from 'react';

import
MaterialCommunityIcons
    from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import CalendarScreen from './src/Screens/CalendarScreen';
import ScanQRScreen from './src/Screens/ScanQRScreen';
import CreateAppointmentScreen from './src/Screens/CreateAppointmentScreen';
import PointsScreen from './src/Screens/PointsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CalendarStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Calendar"
            screenOptions={{
                headerStyle: { backgroundColor: '#04C4F4' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{ title: 'Calendar' }} />
            <Stack.Screen
                name="ScanQR"
                component={ScanQRScreen}
                options={{ title: 'Scan QR' }} />
            <Stack.Screen
                name="CreateAppointment"
                component={CreateAppointmentScreen}
                options={{ title: 'Create Appointment' }} />
        </Stack.Navigator>
    );
}

const PointsStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Points"
            screenOptions={{
                headerStyle: { backgroundColor: '#04C4F4' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen
                name="Points"
                component={PointsScreen}
                options={{ title: 'Points' }} />
        </Stack.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                    activeTintColor: '#04C4F4',
                }}>
                <Tab.Screen
                    name="CalendarStack"
                    component={CalendarStack}
                    options={{
                        tabBarLabel: 'Calendar',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="calendar"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />
                <Tab.Screen
                    name="PointsStack"
                    component={PointsStack}
                    options={{
                        tabBarLabel: 'Points',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="scoreboard-outline"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default App;