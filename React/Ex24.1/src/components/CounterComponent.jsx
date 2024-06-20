import { useCounter } from "../context/useCounter";

export default function CounterComponent() {
  const { value, addOne, removeOne, double, divide } = useCounter(0);

  return (
    <div>
      <h1>Counter Component</h1>
      <p>Value: {value}</p>
      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={double}>Double</button>
      <button onClick={divide}>Divide</button>
    </div>
  );
}
