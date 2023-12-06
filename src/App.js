import { useSelector, useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  const reset = () => {
    dispatch({ type: "reset",payload: 100 });
  };
  const addByTen = () => {
    dispatch({ type: "addByTen" ,payload:10});
  };

  const subByTen = () => {
    dispatch({ type: "subByTen", payload:10 });
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
