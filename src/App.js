import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home.js';
import CreatePost from './components/CreatePost.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Navbar from './components/Navbar.js';
import { useState } from 'react';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/createpost' element={<CreatePost />}></Route>
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
