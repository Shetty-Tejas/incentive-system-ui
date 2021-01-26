import React from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import { Provider } from "react-redux";
import Dealer from "./components/afterLogin/Dealer";
import Manufacturer from "./components/afterLogin/Manufacturer";
import Customer from "./components/beforeLogin/Customer";
import store from "./store";

function App() {
  const history = useHistory();
  return (
    <Provider store={store}>
      <Dealer history={history} />
      <Customer history={history} />
      <Manufacturer history={history} />
    </Provider>
  );
}

export default App;
