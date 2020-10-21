import React from 'react'
import { Text, View } from 'react-native'
import { COLORS } from '../../../Constants'
import CustomIcon from '../CustomIcon'


const Header = ({
    width
}) => {

    return (
        <View
            style={{
                backgroundColor: COLORS.headerBackground,
                height: 60,
                width: width,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingHorizontal: 10
            }}
        >
            <CustomIcon
                name={'cart'}
                style={{
                    fontSize: 24,
                    paddingHorizontal: 5
                }}
            />
            <CustomIcon
                name={'heart'}
                style={{
                    fontSize: 24,
                    paddingHorizontal: 5
                }}
            />
        </View>
    )
}

export default Header