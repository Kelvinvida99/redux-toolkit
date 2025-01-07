import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";

import { decrement, increment, incrementByAmount } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          incrementar
        </button><button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decreser
        </button><button
          onClick={() => {
            dispatch(incrementByAmount(2));
          }}
        >
          incrementar 2
        </button>
        <p># {counter}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
