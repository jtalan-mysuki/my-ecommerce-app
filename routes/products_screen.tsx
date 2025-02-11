import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { products } from "../mocks/products";

import styles from "../styles";

import ProductItem from "../components/Products/ProductItem";

export default function ProductsScreen () {
  const navigation = useNavigation();

  const renderViewCartButton = () => {
    return (
      <View style={styles.viewCardButtonWrapper}>
        <TouchableOpacity 
          style={styles.viewCartButton} 
          onPress={()=> {
            navigation.navigate("Cart")
          }}
        >
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
