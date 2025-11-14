import logo from './logo.svg';
import './App.css';
import Join from './components/Join'
import Login from './components/Login'
import Logout from './components/Logout'
import Main from './components/Main'
import User from './components/User'

import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
function App() {
  return (
    <>
    <h1>APP_VERSION_03.JS</h1>
    <Router>
      <div>
        <Link to="/">MAIN</Link> <br/>
        <Link to="/user">USER</Link> <br/>
        <Link to="/join">JOIN</Link> <br/>
        <Link to="/login">LOGIN</Link> <br/>
        <Link to="/logout">LOGOUT</Link> <br/>

      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={   <User/>  } />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

