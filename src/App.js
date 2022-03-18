
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Products_List from './component/Products_List';
import  Product_Detail from './component/Product_Detail';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products_List />} />
        <Route path="/product/:id" element={< Product_Detail/>} />
      </Routes>
    
    </div>
  );
}

export default App;
