import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
    gap: 15,
    justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  productListWrapper: {
    flex: 1,
    width: "100%",
  },

  scrollViewContentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  viewCardButtonWrapper: {
    width: '100%', 
    backgroundColor: 'black', 
    borderRadius: 5
  },
  viewCartButton: {
    alignItems: 'center', 
    padding: 10,
  },
  viewCartButtonTitle: {
    color: '#fff', 
    fontWeight: 'bold'
  },
});

export default styles;
