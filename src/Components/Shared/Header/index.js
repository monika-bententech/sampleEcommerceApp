import React from 'react'
import { View } from 'react-native'
import { COLORS } from '../../../Constants'


const Header = ({
    width
}) => {

    return (
        <View
            style={{
                backgroundColor: COLORS.headerBackground,
                height: 80,
                width: width
            }}
        >

        </View>
    )
}

export default Header