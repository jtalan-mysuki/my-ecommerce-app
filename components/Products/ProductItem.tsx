import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import productItemStyles from './styles'

const ProductItem = ({ item }) => {
  const { name, price, image_src, quantity } = item

  const renderStepperOption = ({text}) => {
    return (
      <View style={{
        borderWidth: .5, 
        borderColor: 'black', 
        borderRadius: 5,
        height: 20,
        width: 20,
        alignItems: 'center',
        }}>
        <Text>{text}</Text>
      </View>
    )
  }

  const renderProductImage = () => {
    return (
      <View style={{flex: .2}}>
        <Image 
          source={image_src} 
          style={{height: 80, width: 80}}
        />
      </View>
    )
  }

  const renderProductInfo = () => {
    return (
      <View style={{}}>
        <Text>{name}</Text>
        <Text style={{fontWeight: 'bold'}}>P{price}</Text>
      </View>
    )
  }

  const renderProductCount = (count) => {
    return (
      <View style={{
        alignSelf: 'flex-end', 
        flexDirection: 'row', 
        width: '30%', 
        justifyContent: 'space-around',
        }}>
          {renderStepperOption({text: '-'})}
          <Text>{quantity}</Text>
          {renderStepperOption({text: '+'})}
      </View>
    )
  }

  return (
    <View style={productItemStyles.productItem}>
      {/* image */}
      {renderProductImage()}
      {/* product info */}
      <View style={productItemStyles.productInfo}>
        {renderProductInfo()}
        {renderProductCount()}
      </View>
    </View>
  )
}

export default ProductItem