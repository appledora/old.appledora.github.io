import Academic from "./pages/Academic";
import Maindoor from "./pages/Maindoor";
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <> 
    <Routes>
      <Route path="/" element={<Maindoor />} />
      <Route path="/academic" element={<Academic />} />
    </Routes>
    </>
  );
}

export default App;
