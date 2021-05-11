import './App.css';
import {useReducer,createContext} from "react";
import COMA from "./component/comA";
import COMB from "./component/comB";
import COMC from "./component/comC";
const countContext = createContext();

const initialValue = 0;
const reducer=(state,action)=>{
  switch(action){
    case "increment":
      return state=state+1;
    case "decrement":
      return state = state-1;
    case "reset":
      return initialValue
    default:
      return state  
  }
}
function App() {
  const [count,dispatch] = useReducer(reducer,initialValue);
  return (
    <countContext.Provider value = {{countState:count,countDispatch:dispatch}}>
    <div className="App">
    count - {count}
      <COMA/>
      <COMB/>
      <COMC/>
    </div>
    </countContext.Provider>
  );
}

export default App;
export {countContext}