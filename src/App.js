import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleIncrement = () => {
    setCounter((prevCounter) => {
      setErrorMessage('');
      return prevCounter + 1;
    });
  };

  const handleDecrement = () => {
    setCounter((prevCounter) => {
      if (prevCounter === 0) {
        setErrorMessage('cannot decrement bellow zero.');
        return prevCounter;
      }

      setErrorMessage('');
      return prevCounter - 1;
    });
  };

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">{counter}</h1>
      <button data-test="increment-button" onClick={handleIncrement}>
        Increment
      </button>
      <button data-test="decrement-button" onClick={handleDecrement}>
        Decrement
      </button>
      <h4 data-test="error-message">{errorMessage}</h4>
    </div>
  );
}

export default App;
