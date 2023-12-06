import { useSelector, useDispatch } from "react-redux";
import {actions} from "../src/stores/counterStore"
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const reset = () => {
    dispatch(actions.reset());
  };
  const addByTen = () => {
    dispatch(actions.addByTen(10));
  };

  const subByTen = () => {
    dispatch(actions.subByTen(10));
  };
  return (
    <div className="App">
      <h1>COUNTER PROJECT WITH REDUX</h1>
      <p>{counter}</p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
      <button onClick={addByTen}>ADDBYTEN</button>
      <button onClick={subByTen}>SUBBYTEN</button>
    </div>
  );
}

export default App;
