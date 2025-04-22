import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from './components/Home';
import Registration from './components/Registration'
import Login from './components/Login';
import About from './components/About';
import ContactUs from './components/ContactUs'; 
import ProductDetail from './components/ProductDetail';
import Feedback from './components/Feedback';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
function App() {
  return (
    
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home/>} />
                <Route path="Registration" element={<Registration/>} />
                <Route path="Login" element={<Login/>} />
                <Route path="About" element={<About/>} /> 
                <Route path="ContactUs" element={<ContactUs/>} />
                <Route path="Feedback" element={<Feedback/>} />
                <Route path="Categories" element={<Categories/>} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Route>    
        </Routes>
        <Footer />
        <Ticker />
    </BrowserRouter>
    
  );
}

export default App; 