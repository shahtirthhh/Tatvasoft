
import './App.css';
import Users from './Users';

function App() {
  const users = [
    {
      name: "Tirth",
      age: 22
    },
    {
      name: "Hello",
      age: 21
    },
    {
      name: "Byee",
      age: 11
    }
  ]
  return (
    <div className="App">
      {users.map((user) => { return <Users user={user} /> })}
    </div>
  );
}

export default App;
