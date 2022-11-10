import Academic from "./pages/Academic";
import Maindoor from "./pages/Maindoor";
import { HashRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <> 
    <HashRouter>
      <Route exact path="/" element={<Maindoor />} />
      <Route path="/academic" element={<Academic />} />
    </HashRouter>
    </>
  );
}

export default App;
