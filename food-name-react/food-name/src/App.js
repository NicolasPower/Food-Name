//import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from "./pages/inputScreen"
import Info from "./pages/infoScreen"

const App = () => {


 return (
    <>
       <Routes>
          <Route 
            path="/" 
            element={<Home />} />
          <Route path="Info" element={<Info />} />
       </Routes>
    </>
 );
};

export default App;