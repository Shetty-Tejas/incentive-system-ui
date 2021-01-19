import "./App.css";
import Dealer from "./components/afterLogin/Dealer";
import Customer from "./components/beforeLogin/Customer";

function App() {
  return (
    <div className="App">
      <Dealer />
      <Customer />
    </div>
  );
}

export default App;
