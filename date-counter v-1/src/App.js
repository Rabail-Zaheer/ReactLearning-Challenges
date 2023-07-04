import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("July 29 2027");
  date.setDate(date.getDate() + count);

  function handleCountSub() {
    if (count > 1) setCount(count - step);
  }

  function handleCountAdd() {
    if (count >= 0) setCount(count + step);
  }

  function handleStepSub() {
    if (step > 1) setStep(step - 1);
  }

  function handleStepAdd() {
    if (step >= 0) setStep(step + 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleStepSub}>-</button>
        <span>Step: {step}</span>

        <button onClick={handleStepAdd}>+</button>
      </div>
      <div>
        <button onClick={handleCountSub}>-</button>
        <span>Count: {count}</span>

        <button onClick={handleCountAdd}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
