import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Featured from './components/Featured'; 
 import Netflix from './components/Netflix';
import Grid from './components/Grid';
import Reviews from './components/Reviews';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Footer from './components/Footer';
import FeaturedDisplay from './components/FeaturedDisplay';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
     
<Routes>
      <Route path= "/" element={<Home/>} />
      <Route path= "/featured/:id" element={<FeaturedDisplay/>} />
</Routes>
    
    <Footer/>

   
    </div>
  );
}

export default App;
