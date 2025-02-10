import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "./cart_screen";
import ProductsScreen from "./products_screen";

const Stack = createNativeStackNavigator();

export default function AppContainer () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={ProductsScreen}
          name="Products"
          options={{
            title: "Products",
          }}
        />
        <Stack.Screen
          component={CartScreen}
          name="Cart"
          options={{
            title: "Cart",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
