import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
// import Skills from './components/Skills';
import Resume from './components/Resume';

function App() {
  return (
    <div className="app-container container-fluid">
      <div className="row flex-nowrap">
        
        <Sidebar></Sidebar>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/about" element={<About/>}></Route>
          {/* <Route path="/skills" element={<Skills/>}></Route> */}
          <Route path ="/Resume" element={<Resume/>}></Route>
         </Routes>
          
        {/* </BrowserRouter> */}

      </div>
    </div>
  );
}

export default App;
