import "./App.css";
import { NavBar } from "./Routes/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Components/Home";
import About from "./Components/About";
import { Skills } from "./Components/Skills";
import { Project } from "./Components/Project";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
