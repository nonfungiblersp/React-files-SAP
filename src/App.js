//import logo from './logo.svg';
import './App.css'; //to link App.css with this file
import 'MenuBar.css';
import {BrowserRouter as Router,Route,link,Routes} from "react-router-dom";
import MenuBar from './MenuBar';
import Home from './Home';
import ContactUs from './ContactUs';
function App() {
  return (
    <div className='listul'>
        <Router>
          <Switch>
            <Route path='/' exact Component={Home} />
            <Route path='/Login' exact Component={Loign}/>
          </Switch>
        </Router>
    </div>
  )
}

export default App;
