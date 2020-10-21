import React from 'react'
import { Image, Text, View } from 'react-native'
import { COLORS } from '../../Constants'


const ProductCard = ({
    product
}) => {


    return (
        <View
            style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                alignItems: 'center'
            }}
        >
            <View
            >
                <Image
                    source={product.imgSrc}
                    style={{
                        width: 100,
                        height: 80,
                        aspectRatio: 1
                    }}
                />
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 20}}>
                <View>
                    <Text
                    numberOfLines={2}
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            lineHeight: 34
                        }}
                    >
                        {product.name}
                    </Text>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '400',
                            lineHeight: 22
                        }}
                    >
                        {product.desc}
                    </Text>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            lineHeight: 22,
                            color: COLORS.statusBar
                        }}
                    >
                    {product.price + '  Points'}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ProductCard