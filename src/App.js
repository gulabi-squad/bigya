import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import React, { useState } from 'react';



import Signup from './pages/signup/signup.component';
import Home from './pages/home.component';
import Login from './pages/login/login.component';
import Expertlist from './pages/Expertlist';
import Expertdetails from './pages/Expertdetails';
import Clientform from './pages/form.component';
import Hired from './pages/hired/hired.component';
function App() {
  return (
    
    
    <div>
    
    <Router>
    
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/signup'  element={<Signup/>}/>
    <Route path='/login'  element={<Login/>}/>
    <Route path='/card'  element={<Expertlist/>}/>
    <Route path='/details'  element={<Expertdetails/>}/>
    <Route path='/clientform'  element={<Clientform/>}/>
    <Route path='/hired'  element={<Hired/>}/>
    </Routes>
    
    </Router>
    </div>
  );
}

export default App;
