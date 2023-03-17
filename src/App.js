import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


import Signup from './pages/signup/signup.component';
import Home from './pages/home.component';
import Login from './pages/login/login.component';
import Expertlist from './pages/Expertlist';
import Expertdetails from './pages/Expertdetails';

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
    </Routes>
    
    </Router>
    </div>
  );
}

export default App;
