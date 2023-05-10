import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<Calculator />} />
      </Routes>

    </div>
  );
}

export default App;
