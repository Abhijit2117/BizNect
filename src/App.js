import logo from './logo.svg';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
