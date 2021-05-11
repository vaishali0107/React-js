import React,{createContext} from "react";
import './App.css';
import ComA from "./comA";
const Fname =createContext();
const Lname = createContext();

function App() {
  return (
    <div >
      <Fname.Provider value={"Vaishali"}>
      <Lname.Provider value={"Mishra"}>
        <ComA/>
      </Lname.Provider>
      </Fname.Provider>
    </div>
  );
}

export default App;
export {Fname,Lname};