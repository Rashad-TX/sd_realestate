import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FeaturedDisplay from './components/FeaturedDisplay';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import AllDisplay from './components/AllDisplay';
import AllPage from './components/AllPage';

function App() {
  return (
    <div className="App">
      <Navigation/>
     
<Routes>
      <Route path= "/" element={<Home/>} />
      <Route path= "/featured/:id" element={<FeaturedDisplay/>} />
      <Route path= "/all" element={<AllPage/>} />
      <Route path= "/all/:id" element={<AllDisplay/>} />
</Routes>
    
    <Footer/>

   
    </div>
  );
}

export default App;
