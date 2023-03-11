import React from 'react';
import './App.css';
import Box from './Box';

function App() {
  const [display, setDisplay] = React.useState(1);
  return (
    <div className="App">

      {display && <Box />}
      <button onClick={e => setDisplay(0)}>Unmount</button>
    </div>
  );
}

export default App;
