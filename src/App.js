import {Router} from "@reach/router"
import Home from "./components/Home"
import Number from "./components/Number"
import Hello from "./components/Hello"

function App() {

  return (
    <div className="App">
      <Router>
        <Home path = "/home"/>
        <Number path = "/:number"/>
        {/* <Hello path = "/:word" /> */}
        <Hello path = "/:word/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
