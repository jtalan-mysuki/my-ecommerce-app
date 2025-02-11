import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { setCartItems } from '../../redux/slice/productSlice'

import productItemStyles from './styles'

const ProductItem = ({ item }) => {
  const { name, price, image_src, quantity } = item
  const [count, setCount] = useState(quantity || 0)

  const dispatch = useDispatch();

  const handleStepper = (action) => {
    if (action === 'increment') {
      setCount(count=> count + 1)
    } else {
      setCount(count => count  - 1)
    }
    dispatch(setCartItems({id: item.id, quantity: count}))
  }

  const renderStepperOption = ({text, action}) => {
    return (
      <TouchableOpacity onPress={() => handleStepper(action)} style={productItemStyles.productCountOption}>
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
      <View style={productItemStyles.productCountStepper}>
          {renderStepperOption({text: '-', action: 'decrement'})}
          <Text>{count}</Text>
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