import React from 'react'
import { Platform, SafeAreaView, StatusBar, useWindowDimensions, View } from 'react-native'
import Header from './src/Components/Shared/Header'
import { COLORS } from './src/Constants'

const AppConfigComponent = ({
    routeData, ...rest
 }) => {
    const { component: Component, back } = routeData
    const { width, height } = useWindowDimensions()

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
                flex: 1,
                width: width
            }}>
                <Header width={width} back={back} />
                <View
                    style={{
                        flex: 1,
                        width: width,
                        backgroundColor: COLORS.white
                    }}
                >
                    <Component />
                </View>
            </View>
        </SafeAreaView>
        
    )
 }

 export default AppConfigComponent