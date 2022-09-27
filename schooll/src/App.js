import './App.css';
import Product from './Components/Product/Product';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Aloqa from './Components/Aloqa/Aloqa';
import Ramzlar from './Components/Ramzlar/Ramzlar';
import Footer from './Components/Footer/Footer';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      
      <div>
        <Routes>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/card' element={<Card />}/>
          <Route path='/Aloqa' element={<Aloqa />}/>
          <Route path='/Ramzlar' element={<Ramzlar />}/>


        </Routes>
      </div>
    <Footer/>
    </div>
    </BrowserRouter>       
  );
}

export default App;
