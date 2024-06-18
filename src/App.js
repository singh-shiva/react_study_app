import './App.css';
import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Notfound from './components/Notfound';
import Afterlogin from './components/Afterlogin';
import { useState } from 'react';
function App() {
  const[isLoggedin, setLoggedin] = useState(false);
  return (
    <div className="main">
      <Navbar isLoggedin={isLoggedin} setLoggedin={setLoggedin}/>
      <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Login' element={<Login setLoggedin={setLoggedin}/>}/>
              <Route path='/Signup' element={<Signup setLoggedin={setLoggedin}/>}/>
              <Route path='*' element={Notfound}/>
              <Route path='/Afterlogin' element={<Afterlogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
