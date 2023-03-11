import './App.css';
import UserList from './components/UserList';
import HOC from './components/HOC';
import RenderProps from './components/RenderProps';
function App() {
  const users = [
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Sweety'
    },
    {
      id: 3,
      name: 'Kalp'
    }
  ]
  return (
    <div className="App">
      {users.map((user) => <HOC OriginalComponent={<UserList />} data={user} />)}
      <RenderProps render={() => { return (<h3>I am coming from RenderProps</h3>) }} />
    </div>
  );
}

export default App;
