## Setting Up The Environment

1. Clone this repository
2. Run `npm install`
3. Run `npx expo start` then open your desired emulator.


## Instructions

Create an app that contains two screens. The first screen must display the products where the user can add items to his cart. You can use any state management library if you desire.

The second screen must contain the items added to the cart and a summary at the top of the list.

The products to be displayed can be found in `./mocks/products.ts`;

### Product Screen
1. Display the products based on the following mockup:

   ![alt text](https://github.com/jtalan-mysuki/my-ecommerce-app/blob/master/assets/product_screen.png?raw=true)

2. Each product element should have an input stepper that adds or subtracts quantity to the cart.
3. Display a button that is fixed at the bottom which navigates to the cart screen.

### Cart Screen
1. Display the items that were added to the cart.

  ![alt text](https://github.com/jtalan-mysuki/my-ecommerce-app/blob/master/assets/cart_screen.png?raw=true)

2. The cart total & item quantity must be displayed at the top & must be updated when the items in the cart are changed.
