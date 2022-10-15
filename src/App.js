import React from 'react';
import {Route, Routes,Switch} from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Certifications from './Components/Certifications';
function App(){
    return(
        <Switch>
        <Routes Basename="/hari-port">
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/certifications' element={<Certifications/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </Switch>
   
    );
}
export default App;