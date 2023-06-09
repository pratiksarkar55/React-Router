import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="about" element={<About/>}></Route>
   </Routes>
    </>
  );
}

export default App;
