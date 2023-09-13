import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementbyValue,
} from "../redex/slice/CounterSlice";
import "./counter.css";
import { useState } from "react";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // state
  const [increaseValue, setIncreaseValue] = useState(0);

  // add value
  const addValue = Number(increaseValue) || 0;

  // reset
  let resetValue = () => {
    setIncreaseValue(0);
    dispatch(reset());
  };

  return (
    <section className="counter">
      <p className="counter-title">Simple Counter using Redux toolkit</p>

      <div className="counter-state">{count}</div>
      <div className="btn">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => resetValue}>reset</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        onChange={(e) => setIncreaseValue(e.target.value)}
        value={increaseValue}
      />
      <button onClick={() => dispatch(incrementbyValue(addValue))}>
        add Value
      </button>
    </section>
  );
}

export default Counter;
