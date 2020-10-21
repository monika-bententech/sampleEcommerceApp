import React from 'react'
import { Platform, SafeAreaView, StatusBar, View } from 'react-native'
import { COLORS } from './src/Constants'

const AppConfigComponent = ({
    routeData, ...rest
 }) => {
    const { component: Component } = routeData

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.statusBar }}>
            {Platform.OS === 'android' &&
                <View style={{ height: StatusBar.currentHeight }}>
                 <StatusBar
                     backgroundColor={COLORS.statusBar}
                     barStyle="dark-content"
                     translucent
                 />
             </View>
            }
            <View style={{
                flex: 1
            }}>
            <Component />
            </View>
        </SafeAreaView>
        
    )
 }

 export default AppConfigComponent