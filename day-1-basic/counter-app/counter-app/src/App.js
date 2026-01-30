import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import StepControl from './components/StepControl';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {

  const [count, setCount] = useState(0);
  const [stepValue, setStepValue] = useState(1);

  const increment = () => {
    setCount(count + stepValue);
  }

  const decrement = () => {
    setCount(count - stepValue);
  }

  const reset = () => {
    setCount(0);
  }

  const handleStepChange = (e) => {
    setStepValue(Number(e.target.value));
  }

  return (
    <div className="App">
      <div className="counter-container">
        <h1>Counter App</h1>

        <Header count={count}/>
        
        <StepControl stepValue={stepValue} handleStepChange={handleStepChange}/>
        
        <Button increment={increment} decrement={decrement} reset={reset}/>

        <Counter count={count}/>

      </div>
    </div>
  );
}

export default App;
