import { createContext } from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterTwo from './components/CounterTwo';
import Todos from './components/Todos';
import Users from './components/Users';

export const valContext = createContext()
function App() {
  return (
    <div className="App">
      <h2>useReducer()  |  Task-1</h2>
      <Counter />
      <br />
      <hr />

      <h2>useReducer()  |  Task-2</h2>
      <Todos />
      <br />
      <hr />

      <h2>useReducer with useContext  |  Task-1</h2>
      <valContext.Provider value={0}>
        <CounterTwo />
      </valContext.Provider>
      <br />
      <hr />

      <h2>useReducer with useContext |  Task-2</h2>
      <Users />
      <br />
      <hr />
    </div>
  );
}

export default App;
