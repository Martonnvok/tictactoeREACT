import './App.css';
import Jatekter from './komponens/Jatekter.js';
import TictactoeModel from './model/TictactoeModel';
import {useState} from "react";

const tmodel = new TictactoeModel()

function App() {
  const [lista, setLista] = useState([...tmodel.getLista()])
  function kattintas(szoveg) {
    console.log(szoveg)
    tmodel.setLista(szoveg)
    setLista([...tmodel.getLista()])
  }

  return (
    <div className="App">
      <header>
        <h1>Tictactoe</h1>
      </header>
      <article>
        <Jatekter kattintas={kattintas} lista={lista}/>
      </article>
    </div>
  );
}

export default App;
