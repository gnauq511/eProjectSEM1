import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from './components/Home';
import Registration from './components/Registration'
import Login from './components/Login';
import About from './components/About';
import Location from './components/Location';
import Cart from './components/Cart';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="home" element={<Home/>} />
                <Route path="Registration" element={<Registration/>} />
                <Route path="Login" element={<Login/>} />
                <Route path="About" element={<About/>} /> 
                {/* <Route path="Cart" element={<Cart/>} /> */}
                <Route path="Location" element={<Location/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;