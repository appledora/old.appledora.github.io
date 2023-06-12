import Academic from "./pages/Academic";
import Maindoor from "./pages/Maindoor";
import { HashRouter, Route, Layout, Routes } from "react-router-dom";
import { Switch } from "react-router-dom";
const App = () => {
  return (
    // <>
    //   <HashRouter>
    //     <Switch>
    //     <Route  path="/" element={<Maindoor />} />
    //     <Route  path="/academic"  element={<Academic />} />
    //     </Switch>
    //   </HashRouter>
    // </>

    <HashRouter>
      <Switch>
        {/* <Route exact path="/" component={Maindoor}/> */}
        <Route exact path="/" component={Academic} />
      </Switch>
    </HashRouter>
  );
};

export default App;
