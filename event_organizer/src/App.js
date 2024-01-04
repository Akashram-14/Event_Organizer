import logo from './logo.svg';
 import './App.css';
  import Welcome from './Component/Welcome/Welcome';
 import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import NittyGritty from './Component/About/About';
import Location from './Component/Location/Location';
import TermsAndConditions from './Component/Footer/Terms';
import PrivacyPolicy from './Component/Footer/Privacy';
import Events from './Component/Events/Events';
import Card from './Component/Card/Card1';
import Clients from './Component/Clients/Clients';


function App() {
  return (
    <div >
      <Router>
      <div>
        <Routes>
        <Route path="/" element={<Welcome />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<NittyGritty/>} />
            <Route path='/Location' element={<Location/>} />
            <Route path='/Terms' element={<TermsAndConditions/>} />
            <Route path='/Privacy' element={<PrivacyPolicy/>} />
            <Route path='/Events' element={<Events/>} />
            <Route path='/Card' element={<Card/>} />
            <Route path='/Location' element={<Location/>}/> 
            <Route path='/Clients' element={<Clients/>} />
        </Routes>
      </div>
    </Router> 
    </div>
  );
}

export default App;