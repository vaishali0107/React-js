
import './App.css';
import Cards from "./compoments/Cards"

function App() {
  return (
    <div className="App">
    <h1>List of Top 5 series in Netflix.</h1>
      <Cards imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" series="A Netflix Original Series" title="Dark"/>
      <Cards imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" series="A Netflix Original Series" title="Dark"/>
      <Cards imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" series="A Netflix Original Series" title="Dark"/>
      <Cards imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" series="A Netflix Original Series" title="Dark"/>
      <Cards imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" series="A Netflix Original Series" title="Dark"/>
    </div>
  );
}

export default App;
