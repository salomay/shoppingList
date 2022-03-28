import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Catalogue from './pages/Catalogue';
import Users from './pages/Users';
import Project from './pages/Project';
import Report from './pages/Report';

function App() {
  return (
   <Router>
     <div className='App'>
       <Navbar/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/room' element={<Rooms />}/>
          <Route path='/catalogue' element={<Catalogue />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/report' element={<Report />}/>
          
         
        </Routes>

      </div>

     </div>
   </Router>
  );
}

export default App;
