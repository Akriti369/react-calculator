import { useState } from "react";
import styles from "./App.module.css";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleButtonClick = (btntxt) => {
    if (btntxt === "AC") {
      setCalVal("");
    } 
    else if (btntxt === "DEL") {
    setCalVal(String(calVal).slice(0, -1));
  }
  else if (btntxt === "=") {
      try {
        const result = eval(calVal);
        setCalVal(String(result));
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      const newValue = calVal + btntxt;
      setCalVal(newValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.brand}>akriti <i class="fa-solid fa-paw"></i></div>
      <Display displayValue={calVal} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;