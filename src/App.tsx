import React, {useState} from "react";

import "./App.scss";
import ModalStepPassword from "./layouts/ModalStepPassword";

const App = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="App">
      <main className="App-content">
        <ModalStepPassword/>
      </main>
    </div>
  )
}
export default App;
