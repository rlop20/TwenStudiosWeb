import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './navbars/NavBar'
import Home from './home/home'
import Games from './games/Games'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home  title={"one"} />} />
          <Route path="/games" element={<Games />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;