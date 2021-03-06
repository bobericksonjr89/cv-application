import Header from "./components/Header.js";
import Summary from "./components/Summary.js";
import Experience from "./components/Experience.js";
import Education from "./components/Education.js";
import Skills from "./components/Skills.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
