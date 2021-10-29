import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">{counter}</h1>
      <button data-test="increment-button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

export default App;
