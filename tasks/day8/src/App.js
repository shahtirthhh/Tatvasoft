import PureComp from './components/PureComp';
import Title from './components/Title';
import InputRef from './components/InputRef';
import React from 'react';
import './App.css';

function App() {
  const [name, setName] = React.useState('Tirth');
  const [title, setTitle] = React.useState('Welcome');
  return (
    <div className="App">
      <hr></hr>
      <h2>Task - 1 - Performance enhancement using pure components</h2>
      <PureComp name={name} />
      <button onClick={() => setName('Tirth')}>Set name to Tirth</button>
      <button onClick={() => setName('Vishwas')}>Set name to Vishwas</button>
      <hr></hr>
      <h2>Task - 2 - Performance enhancement using memo</h2>
      <Title title={title} />
      <button onClick={() => setTitle('Welcome')}>Set title to Welcome</button>
      <button onClick={() => setTitle('Bye')}>Set title to Bye</button>
      <hr></hr>
      <h2>Refs in class components</h2>
      <InputRef />
    </div>
  );
}

export default App;
