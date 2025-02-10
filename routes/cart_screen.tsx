import { Text, View } from "react-native";

import styles from "../styles";

export default function CartScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {"Instruction"}
      </Text>
      <Text>
        {"1. Display the items that were added to the cart."}
      </Text>
      <Text>
        {"2. The cart total & item quantity must be displayed at the top."}
      </Text>
    </View>
  )
}
