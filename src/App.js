import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/contact";
import { useContext } from 'react';
import { MainContext } from './pages/context';


function App() {
  const {  closeMenu } = useContext(MainContext)

  return (
    <div className="App" onClick={(e)=>closeMenu(e)}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
