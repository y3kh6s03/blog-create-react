import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home.js';
import CreatePost from './components/CreatePost.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/createpost' element={<CreatePost />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
