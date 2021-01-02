import { Switch, Route, Router } from "react-router-dom";
import "./App.css";
import Nieuws from "./pages/nieuws";
import Slapen from "./pages/slapen";
import Eten from "./pages/eten";
import Feesten from "./pages/feesten";
import Activiteiten from "./pages/activiteiten";
import Home from "./pages/home";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/nieuws" component={Nieuws} />
        <Route path="/eten" component={Eten} />
        <Route path="/slapen" component={Slapen} />
        <Route path="/feesten" component={Feesten} />
        <Route path="/activiteiten" component={Activiteiten} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
