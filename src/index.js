import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Certifications from './Components/Certifications';

const routing = (
    <BrowserRouter>
        <Routes Basename="/hari-port">
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/certifications' element={<Certifications/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
   
    
);

ReactDOM.render(routing,document.getElementById('root'));