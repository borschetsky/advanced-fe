import { useState } from "react";
import classes from './counter.module.scss'

const Counter = () => {

  const [ count, setCount ] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  }
  return (
    <div className={classes.button}>
      <h1>{ count }</h1>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

export default Counter;