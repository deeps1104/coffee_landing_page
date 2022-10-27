import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Menu from './component/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/about'element={<About/>}> </Route>
        <Route path='/menu' element={<Menu/>}></Route>

      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
