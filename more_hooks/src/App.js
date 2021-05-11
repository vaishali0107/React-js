
import  React,{ createContext } from 'react';
import './App.css';
import COMC from "./comC";
const Fname = createContext();
const Lname = createContext();

function App() {
  return (
    <div className="App">
    <Fname.Provider value={"Vaishali"}>
    <Lname.Provider value={"Mishra"}>
      <COMC/>
      </Lname.Provider>
    </Fname.Provider>
    </div>
  );
}

export default App;
export {Fname,Lname};