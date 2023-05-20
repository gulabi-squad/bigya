import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import './App.css'

import Signup from './pages/signup/signup.component';
import Home from './pages/home.component';
import Login from './pages/login/login.component';
import Otp from './components/otp.component';
import Allexperts from './pages/Allexperts.component';
import Expertdetails from './components/detailpage';
import StarRating from './components/Rating';
import Expertform from './components/expertform';
import { AuthProvider } from './context/AuthContext';
import Clientform from './components/clientform';
import Hirerequest from './pages/hired.component';
import ProposalList from './pages/Proposals';
import Filteredexperts from './pages/filteredexperts';
import Showreviews from './components/showreviews';
import Details from './components/details'
function App() {
  return (
    <Router>
    <div>
      <AuthProvider>
    <Routes>

    <Route path='/' exact element={<Home/>}/>
    <Route path='/signup'  element={<Signup/>}/>
    <Route path='/signup/otp'  element={<Otp/>}/>

    <Route path='/login'  element={<Login/>}/>
    <Route path='/allexperts'  element={<Allexperts/>}/>
    <Route path='/expertform'  element={<Expertform/>}/>
    <Route path='/allexperts/:id'  element={<Expertdetails/>}/>
    <Route path='/allexperts/search/:searchkey'  element={<Filteredexperts/>}/>

    <Route path='/rate'  element={<StarRating/>}/>
    <Route path='/hirerequests'  element={<Hirerequest/>}/>
    <Route path='/proposals'  element={<ProposalList/>}/>
    <Route path='/allexperts/details/clientform'  element={<Clientform/>}/>
    <Route path='/test'  element={<Showreviews/>}/>
    <Route path='/details'  element={<Details/>}/>
      </Routes>
      </AuthProvider>
    </div>
    </Router>
  );
}

export default App;
