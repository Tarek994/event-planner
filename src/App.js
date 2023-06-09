import './App.css';
import "../src/components/navbar/Navbar.jsx"
import Navbar from '../src/components/navbar/Navbar.jsx';
import Home from './components/home/Home';
import About from './components/about/About.jsx';
import Gallery from './components/gallery/gallery';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
    </div>
  );
}

export default App;
