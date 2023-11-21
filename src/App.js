import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import Spining from "./components/Spining";
function App() {
  return (
    <div className="App my-2 scroll-smooth">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
