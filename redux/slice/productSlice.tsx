// redux/slices/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../mocks/products";

const initialState = {
  cartItems: products.filter(product => product?.quantity),
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      let newCartItems;

      if (state.cartItems?.length === 0) {
        state.cartItems = [
          {
            id: action.payload.id,
            quantity: action.payload.quantity
          }
        ];
      } else {
        const itemIndex = state.cartItems?.findIndex(item => item.id === action.payload.id)
        if (itemIndex === -1) {
          newCartItems = [
            ...state.cartItems,
            {
              id: action.payload.id,
              quantity: action.payload.quantity
            }
          ]
          state.cartItems = newCartItems;
        } else {
          state.cartItems[itemIndex].quantity = action.payload.quantity
        }
      }
    }    
  },
});

export const { setCartItems } = productSlice.actions;
export default productSlice.reducer;
