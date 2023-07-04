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

  function handleReset() {
    setCount(0);
    setStep(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={handleCountSub}>-</button>

        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />

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

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}></button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
