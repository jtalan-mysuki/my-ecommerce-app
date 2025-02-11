import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around',
    borderBottomWidth: .5,
    borderBottomColor: 'gray',
  },
  productInfo: {
    flex: .7,
    alignItems: 'flex-start',
  },
  productCountOption: {
    borderWidth: .5, 
    borderColor: 'black', 
    borderRadius: 5,
    height: 20,
    width: 20,
    alignItems: 'center',
  },
  productCountStepper: {
    alignSelf: 'flex-end', 
    flexDirection: 'row', 
    width: '30%', 
    justifyContent: 'space-around',
  }
});

export default styles;
