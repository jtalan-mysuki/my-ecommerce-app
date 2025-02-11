import { ScrollView, TouchableOpacity, View, Text } from "react-native";

import styles from "../styles";

import { products } from "../mocks/products";
import ProductItem from "../components/Products/ProductItem";

export default function ProductsScreen () {
  const renderViewCartButton = () => {
    return (
      <View style={styles.viewCardButtonWrapper}>
        <TouchableOpacity style={styles.viewCartButton}>
          <Text style={styles.viewCartButtonTitle}>View Cart</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.productListWrapper} 
        contentContainerStyle={styles.scrollViewContentContainer}
      >
        {products.map((product) => { 
          return <ProductItem key={product.id} item={product} />
        })}
        {renderViewCartButton()}
      </ScrollView>
    </View>
  )
}
