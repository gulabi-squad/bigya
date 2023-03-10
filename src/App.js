import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Homepage from './components/Homepage';

function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
        <Route path='dashboard/' element={<Homepage/>}></Route>

        </Routes>

      </Router>

    </div>)}

















// working end



export default App;
