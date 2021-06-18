import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1> Dictionary</h1>
          <Dictionary />
        </div>
      </header>
    </div>
  );
}

export default App;
