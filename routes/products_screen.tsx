import { Text, View } from "react-native";

import styles from "../styles";

import { products } from "../mocks/products";

export default function ProductsScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {"Instruction"}
      </Text>
      <Text>
        {"1. Display the products here according to the specs."}
      </Text>
      <Text>
        {"2. Each product element should have an input stepper that adds or subtracts quantity to the cart."}
      </Text>
      <Text>
        {"3. Display a button that is fixed at the bottom which navigates to the cart screen."}
      </Text>
    </View>
  )
}
