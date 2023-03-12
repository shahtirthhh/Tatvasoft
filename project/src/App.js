// import Registration from './components/PAGES/Registration'
import Header from './components/SECTIONS/Header';
import Search from './components/SECTIONS/Search';
import Footer from './components/SECTIONS/Footer';

// import Login from './components/PAGES/Login';
import Registration from './components/PAGES/Registration';
// import ProductPage from './components/PAGES/ProductPage';

import './components/CSS/App.css';
import React from 'react';
function App() {
  // const products = [
  //   { id: 1, title: "IBSM Followup 1", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup 2", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup 3", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup 4", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup 5", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup 6", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup 7", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup 8", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup 9", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup 10", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup 11", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup 12", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  //   { id: 1, title: "IBSM Followup", font: "data source 1", Query: "test" },
  // ]
  return (
    <div className="App">
      <Header />
      <Search placeholder="What are you looking for..." />
      <Registration />
      {/* <ProductPage products={products} /> */}
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
