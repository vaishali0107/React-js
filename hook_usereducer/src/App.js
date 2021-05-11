
import './App.css';
import Counter1 from "./component/CounterOne" 
import Counter2 from "./component/CounterTwo" 
import Counter3 from "./component/counterThree"
import Fetch1 from "./component/Datafetch1"
import Fetch2 from "./component/DataFetchTwo"
function App() {
  return (
    <div className="App">
     {/*<Counter1/>} 
      <Counter2/>
      {<Counter3/>*/}
      <Fetch1/>
      <Fetch2/>
    </div>
  );
}

export default App;
