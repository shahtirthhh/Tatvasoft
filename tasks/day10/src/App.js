import './App.css';
import contx from './components/userContext';
import ComA from './components/ComA';
function App() {
  return (
    <div className="App">
      <contx.Provider value="Passing through context">
        <ComA />
      </contx.Provider>
    </div>
  );
}

export default App;
