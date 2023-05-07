"use client";

import type { RootState } from "./Redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./Redux/Features/counter/counterSlice";

import styles from "./page.module.css";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>+ 2</button>
    </main>
  );
};

export default Home;
