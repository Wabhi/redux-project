import { useSelector, useDispatch } from "react-redux";
import {actions} from "../src/stores/counterStore"
import Auth from "./components/Auth";
import Layout from "./components/Layout";
function App() {
   const isLoggedin = useSelector(state =>state.auth.isLoggedin);
  return (
    <>
    <div className="App">
      {!isLoggedin && <Auth/>}
      {isLoggedin && <Layout/>}
      {/* <Layout /> */}
    </div>
    </>
  )
}

export default App;
