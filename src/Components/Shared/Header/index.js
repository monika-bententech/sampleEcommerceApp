import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { COLORS, SCREEN_NAMES } from '../../../Constants'
import CustomIcon from '../CustomIcon'
import CustomTouchableOpacity from '../CustomTouchableOpacity'


const Header = ({
  width,
  back
}) => {
  const navigation = useNavigation()
  const route = useRoute()

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
      {Boolean(back) && <View>
        <CustomTouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={{
            justifyContent: 'center',
            height: 60
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: 'blue'
            }}
          >
            Back
                </Text>
        </CustomTouchableOpacity>
      </View>}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
      <CustomTouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.education)
          }}
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 50,
            height: 40
          }}
        >
          <CustomIcon
            name={'camera'}
            style={{
              fontSize: 24,
              paddingHorizontal: 5,
              color: route.name === SCREEN_NAMES.education ? COLORS.white : COLORS.black
            }}
          />
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              color: route.name === SCREEN_NAMES.education ? COLORS.white : COLORS.black
            }}
          >
            Education
          </Text>
        </CustomTouchableOpacity>
        <CustomTouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.wishlist)
          }}
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 50,
            height: 40
          }}
        >
          <CustomIcon
            name={'heart'}
            style={{
              fontSize: 24,
              paddingHorizontal: 5,
              color: route.name === SCREEN_NAMES.wishlist ? COLORS.white : COLORS.black
            }}
          />
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              color: route.name === SCREEN_NAMES.wishlist ? COLORS.white : COLORS.black
            }}
          >
            Wishlist
          </Text>
        </CustomTouchableOpacity>
        <CustomTouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.cart)
          }}
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 50,
            height: 40
          }}
        >
          <CustomIcon
            name={'cart'}
            style={{
              fontSize: 24,
              paddingHorizontal: 5,
              color: route.name === SCREEN_NAMES.cart ? COLORS.white : COLORS.black
            }}
          />
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              color: route.name === SCREEN_NAMES.cart ? COLORS.white : COLORS.black
            }}
          >
            Cart
          </Text>
        </CustomTouchableOpacity>
      </View>
    </View>
  )
}

export default Header