import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Featured from './components/Featured'; 

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <Featured/>
    </div>
  );
}

export default App;
