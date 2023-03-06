import './App.css';
import { useState } from 'react';
import Home from './components/pages/Home'
import About from './components/About';
function App() {
  const [active, setActive] = useState(0);
  return (
    <div className="App">
      {active ? <About /> : <Home />}
      <button onClick={() => setActive(!active)}>Change page</button>
    </div>

  );
}

export default App;
