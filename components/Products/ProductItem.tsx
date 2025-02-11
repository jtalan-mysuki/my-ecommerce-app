import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import productItemStyles from './styles'

const ProductItem = ({ item }) => {
  const { name, price, image_src, quantity } = item
  const [count, setCount] = useState(quantity)

  const handleStepper = (action) => {
    if (action === 'increment') {
      setCount(count=> count + 1)
    } else {
      setCount(count => count  - 1)
    }
  }

  const renderStepperOption = ({text, action}) => {
    return (
      <TouchableOpacity onPress={() => handleStepper(action)} style={{
        borderWidth: .5, 
        borderColor: 'black', 
        borderRadius: 5,
        height: 20,
        width: 20,
        alignItems: 'center',
        }}>
        <Text>{text}</Text>
      </TouchableOpacity>
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
          {renderStepperOption({text: '-', action: 'decrement'})}
          <Text>{count || 0}</Text>
          {renderStepperOption({text: '+', action: 'increment'})}
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
        {renderProductCount(count)}
      </View>
    </View>
  )
}

export default ProductItem