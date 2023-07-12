import "./App.css";
import Sidepane from "./components/Sidepan";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    // <HashRouter>
    //   <Sidepane />
    //   <Switch>
    //     <Route exact path="/" component={Intro} />
    //     <Route exact path="/publication" component={Publication} />
    //   </Switch>
    // </HashRouter>
    <div>
      <Router>
        <Sidepane />
        <AnimatedRoutes />
      </Router>
    </div>
  );
};

export default App;
