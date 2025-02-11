import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppContainer from "./routes";

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer /> 
    </Provider>
  );
}
