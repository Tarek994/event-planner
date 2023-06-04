import './App.css';
import "../src/components/navbar/Navbar.jsx"
import Navbar from '../src/components/navbar/Navbar.jsx';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
