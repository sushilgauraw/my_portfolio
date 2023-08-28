import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from './Routes/Home';
import About from './Routes/About';
import Project from './Routes/Project';
import Contact from './Routes/Contact';

function App() {
  return (
    <>
    <BrowserRouter basename='/my_portfolio'>
    <Routes>
      <Route path='/my_portfolio' element = {<Home/>}/>
      <Route path='/Project' element = {<Project/>}/>
      <Route path='/About' element = {<About/>}/>
      <Route path='/Contact' element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
