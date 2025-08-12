import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Loginpage from './pages/loginpage';
import SignupPage from './pages/signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Loginpage />} />
        <Route path='signup' element={<SignupPage />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
