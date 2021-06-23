import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1> Dictionary</h1>
          <Dictionary />
          <span className="Nicky">Coded by Nicky Clift</span>
        </div>
      </header>
    </div>
  );
}

export default App;
