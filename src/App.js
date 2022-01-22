// import "./App.css";
import Calculator from "./calculator/Calculator";
import "./styles/global.scss";
import { Arrowleft } from "./svg/svg-icons";

function App() {
  return (
    <div className="App">
      <div className="plan">
        <Arrowleft style={{ marginTop: "2px" }} />

        <span> Let’s plan your saving goal</span>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
