import {createStore} from "redux";

const reducerFun = (state={counter:100},action) =>{
  console.log(">>>>>>>>>>>",state.counter);
  if(action.type === "increment"){
    return {counter:state.counter+1}
  }
   if (action.type === "decrement") {
     return { counter: state.counter - 1 };
   }
    if (action.type === "reset") {
      return {counter:action.payload};
    }
     if (action.type === "addByTen") {
       return { counter: state.counter + action.payload };
     }
      if (action.type === "subByTen") {
        return { counter: state.counter - action.payload };
      }
 return state
}


const store = createStore(reducerFun)
export default store