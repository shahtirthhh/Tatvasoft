import { useState } from 'react';
import './App.css';
import RegisterUser from './components/RegisterUser';
import UserDetail from './components/UserDetail';

function App() {
  const [user, changeUser] = useState({})
  const changeDetails = (data) => {
    changeUser(data);
  }
  return (
    <div className="App">
      <h1>Task 1</h1>
      <RegisterUser onUserChange={changeDetails} />
      <hr />
      <h1>Task 2</h1>
      <UserDetail user={user} />
    </div>
  );
}

export default App;
