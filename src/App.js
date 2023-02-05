import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


import Signup from './pages/signup/signup.component';
import Home from './pages/home.component';
import Login from './pages/login/login.component';

function App() {
  return (
    <Router>
    <div>
    <Routes>

    <Route path='/' exact element={<Home/>}/>
    <Route path='/signup'  element={<Signup/>}/>
    <Route path='/login'  element={<Login/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
