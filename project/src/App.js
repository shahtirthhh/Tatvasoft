// import Registration from './components/PAGES/Registration'
import Header from './components/SECTIONS/Header';
import Search from './components/SECTIONS/Search';
import Footer from './components/SECTIONS/Footer';
import Login from './components/PAGES/Login';
import './components/CSS/App.css';
import React from 'react';
function App() {

  return (
    <div className="App">
      <Header />
      <Search placeholder="What are you looking for..." />
      <Login />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
