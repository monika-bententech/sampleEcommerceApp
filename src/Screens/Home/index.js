import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CustomTouchableOpacity from '../../Components/Shared/CustomTouchableOpacity'
import { COLORS, PRODUCT_LIST } from '../../Constants'
import { SCREEN_NAMES } from '../../Constants'
import ProductCard from './ProductCard'

const Home = ({

}) => {
    const { width } = useWindowDimensions()
    const navigation = useNavigation()
    const products = [
        ...PRODUCT_LIST
    ]

    return (
        <View
            style={{
                flex: 1,
                width: width
            }}
        >
            <ScrollView
                style={{
                    flex: 1,
                    width: width
                }}
            >
                {Boolean(products && products.length) &&
                    products.map((product, index) => {


                        return (
                            <CustomTouchableOpacity
                                key={index}
                                style={{
                                    width: width,
                                    paddingVertical: 10,
                                    borderBottomWidth: 1,
                                    borderBottomColor: COLORS.grey
                                }}
                                onPress={() => {
                                    navigation.navigate(SCREEN_NAMES.productDetail, {
                                        product: product
                                    })
                                }}
                            >
                                <ProductCard
                                    product={product}
                                />
                            </CustomTouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Home