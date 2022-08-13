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

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
    <Featured/>
 <Rotate topLeft>
    <Netflix/>
    </Rotate>
  
  
      <Grid/>
     
      <Reviews/>

   
    </div>
  );
}

export default App;
