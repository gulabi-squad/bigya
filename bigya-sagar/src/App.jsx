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
import Showreviews from './components/showreviews.jsx';
import PrivateRoute from './utils.jsx/PrivateRoute';
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
    <Route path='/expertform'  element={<PrivateRoute><Expertform/></PrivateRoute>}/>
    <Route path='/allexperts/:id'  element={<Expertdetails/>}/>
    <Route path='/allexperts/search/:searchkey'  element={<Filteredexperts/>}/>

    <Route path='/rate'  element={<PrivateRoute><StarRating/></PrivateRoute>}/>
    <Route path='/hirerequests'  element={<PrivateRoute><Hirerequest/></PrivateRoute>}/>
    <Route path='/proposals'  element={<PrivateRoute><ProposalList/></PrivateRoute>}/>
    <Route path='/allexperts/details/clientform'  element={<PrivateRoute><Clientform/></PrivateRoute>}/>
    <Route path='/reviews'  element={<Showreviews/>}/>
      </Routes>
      </AuthProvider>
    </div>
    </Router>
  );
}

export default App;
