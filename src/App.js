import "./App.css";
import Dealer from "./components/afterLogin/Dealer";
import Manufacturer from "./components/afterLogin/Manufacturer";
import Customer from "./components/beforeLogin/Customer";

function App() {
  return (
    <div className="App">
      <Dealer />
      <Customer />
      <Manufacturer />
    </div>
  );
}

export default App;
